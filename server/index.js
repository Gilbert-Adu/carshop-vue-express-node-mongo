const express = require("express");

const app = express();
const routes = require('./src/routes/routes');
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();
const bodyParser = require("body-parser");
app.use(cors()) // to allow cross origin requests
app.use(bodyParser.json()) // to convert the request into JSON
app.use(express.urlencoded());

//view engine
app.set('view engine', 'ejs');
//routes
app.use('/admin', routes);

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))

app.get("/", (req, res) => {
    res.redirect("/");
});

app.listen(process.env.PORT, () => console.log(`App listening at http://localhost:${process.env.PORT}`))