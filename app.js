const express = require('express');
const app = express();
const bcrypt = require('bcrypt');


// Enable express to parse json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const session = require('express-session');
// you need to copy the config.template.json file and fill out your secret
const config = require('./config/config.json');

app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true,
}));

app.use(express.static("public"));

/* 
    Setup Objection + Knex 
*/

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
const collectionRoute = require('./routes/collections.js');
app.use(collectionRoute);

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