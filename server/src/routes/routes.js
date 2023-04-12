const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/users.js");
const Car =  require("../models/cars.js");
const auth = require("../middlewares/auth.js");

router.get("/", async (req, res) => {
    
    const allCars = await Car.find();
    //console.log("got all cars");
    res.status(200).send(allCars);
    //res.send("general view");
});

//admin login
router.post("/login", async (req, res) => {
    try {
        const {email, password } = req.body;

        if (!(email && password)) {
            res.status(400).send({"message": "All input is required"});
        }

        const user = await User.findOne({email: email});

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
            return res.send(user);
            
        }

    }catch(err) {
        res.status(400).send({"message": err.message});
    }
});

router.post("/addCar", auth, async (req, res) => {

    try {
        const {make, image, model, year, color, mileage, price, title, description} = req.body;
        const id = req.user.user_id;
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
        const adminCars = await Car.find();
        res.status(201).send(adminCars);

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