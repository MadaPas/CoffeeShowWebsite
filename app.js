const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const session = require("express-session");
const fs = require('fs');


// Enable express to parse json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* session */
const config = require("./config/config.json");

// used as middleware, sits between the request and the response
app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true,
}));

/* rate limiter */
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 8 // limit each IP to 8 requests per windowMs
});

// set specific limiter for different routes
app.use('/register', authLimiter);
app.use('/login', authLimiter);



/* Setup Knex with Objection */

const { Model } = require('objection');
const Knex = require('knex');
// knexFile contains our meta information about our connection
const knexFile = require('./knexfile.js');

// Initialize knex  // knex contains the connection
const knex = Knex(knexFile.development); // This is how you can have different environments, eg. Development, Production


// Give the knex instance to objection
// Connect the knex to our objection model, so that objection knows to use knex
Model.knex(knex);

// const saltRounds = 12;
// bcrypt.hash("admin_pass", saltRounds, function(err, hash) {
//     console.log("admin:", hash);
// });
// bcrypt.hash("user_pass", saltRounds, function(err, hash) {
//     console.log("user:", hash);
// });

app.use(express.static('public'));

/*
    Routes
*/
const userRoute = require('./routes/users.js');
app.use(userRoute);
const coffeeRoute = require('./routes/coffees.js');
app.use(coffeeRoute);
const categoryRoute = require('./routes/categories.js');
app.use(categoryRoute);
const countryRoute = require('./routes/countries.js');
app.use(countryRoute);
const specialtyRoute = require('./routes/specialties.js');
app.use(specialtyRoute);

const navbar = fs.readFileSync("./public/global/navbar/navbar.html", "utf8");
const navbarUser = fs.readFileSync("./public/global/navbar/navbar-user.html", "utf8");
const header = fs.readFileSync("./public/global/header/header.html", "utf8");
const footer = fs.readFileSync("./public/global/footer/footer.html", "utf8");
const mainPage = fs.readFileSync("./public/global/main/main-page.html", "utf8");
const homePage = fs.readFileSync("./public/home/home-page.html", "utf8");


const loginPage = (req, res, next) => {
    if (!req.session.user) {
        res.redirect('/login');
    } else {
        next();
    }
}

const homePage = (req, res, next) => {
    if (req.session.user) {
        res.redirect('/home-page');
    } else {
        next();
    }
}


app.get('/', homePage, (req, res) => {
    console.log("session: ", req.sessionID);
    console.log("user: ", req.session.user);

    return res.send(header + navbar + mainPage + footer);
})

app.get('/home-page', goToLoginPage, (req, res) => {
    console.log("session: ", req.sessionID);
    console.log("user: ", req.session.user);

    return res.send(header + navbarUser + homePage + footer)

})


/* 
    Start server 
*/

const PORT = 5000;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", PORT);
});