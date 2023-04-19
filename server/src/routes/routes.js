const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/users.js");
const Car =  require("../models/cars.js");
const auth = require("../middlewares/auth.js");
const path = require("path");

router.get("/loginpage", (req, res) => {
    res.render(path.join(__dirname, "views/login.ejs"));
});

router.get("/cars/:productId", async (req, res) => {
    const productId = req.params.productId;
    let theCar = await Car.find({_id: productId});
    theCar = theCar[0];
    res.render(path.join(__dirname, "views/product.ejs"), { theCar });
});

router.get("/", async (req, res) => {
    
    const allCars = await Car.find();
    //console.log("got all cars");
    res.status(200).send(allCars);
    //res.send("general view");
});

//get all users

router.get("/allusers", async (req, res) => {
    const allUsers = await User.find();
    res.send(allUsers);
})
//admin register
router.post('/register', async (req, res) => {

    try {

        const {firstname, lastname, email, password} = req.body;

        if (!(email && password && firstname && lastname)){
            res.status(400).send("All input is required");
        };

        //check if it's an older user

        const oldUser = await User.findOne({email});

        if (oldUser) { return res.status(409).send("User already exists")};

        encryptedUserPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            first_name: firstname,
            last_name: lastname,
            email: email.toLowerCase(),
            password: encryptedUserPassword,
            is_admin: true
        });

        const token = jwt.sign(
            { user_id: user._id, email},
            process.env.TOKEN_KEY,
            {
                expiresIn: "5h"
            }
        );

        user.token = token;

        res.status(201).json(user);

    }catch(err) {

        console.log(err);

    }
});

//admin login
router.post("/login", async (req, res) => {
    try {
        const {email, password } = req.body;
        if (!(email && password)) {
            res.status(400).send({"message": "All input is required"});
        }

        let user = await User.findOne({email: email});

        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign(
                {user_id: user._id, email},
                process.env.TOKEN_KEY,
                {
                    expiresIn: "5H"
                }
            )

            user.token = token;
            req.user = user;
            req.headers["x-access-token"] = token;
            let options = {
                path: "/",
                sameSite: true,
                maxAge: 1000 * 60 * 24,
                httpOnly: true
            }

            res.cookie('x-access-token', token, options);
            res.cookie("loggedin", true);
            const id = req.user._id;
            const adminCars = await Car.find({relational_id: id});
            return res.render(path.join(__dirname, "views/admin.ejs"), {user: user, inventory: adminCars});
            
        }

    }catch(err) {
        res.status(400).send({"message": err.message});
    }
});

router.get("/addCar", auth, (req, res) => {
    res.render(path.join(__dirname, "views/addCar"));
});
router.post("/addCar", auth, async (req, res) => {

    try {
        const {make, image, model, year, color, mileage, price, title, description} = req.body;
        const id = req.user.user_id;
        const user = User.find({email: req.user.email});
        const car = await Car.create({
            make: make,
            model: model,
            year: year,
            image: image,
            color: color,
            mileage: mileage,
            price: price,
            title: title,
            description: description,
            relational_id: id, 
            is_available: true,
        });
        console.log(req.user);
        const adminCars = await Car.find({relational_id: id});
        res.render(path.join(__dirname, "views/admin.ejs"), {user: user, inventory: adminCars});

    }catch(err) {
        res.send({"message": err.message});
    }
});

//delete all cars
router.delete("/deleteAll", async (req, res) => {
    await Car.deleteMany();
    const adminCars = await Car.find();
    res.send(adminCars);
});
module.exports = router;