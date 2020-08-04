const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const session = require('express-session');
const rateLimit = require('express-rate-limit');
const fs = require('fs');

/*
    Enable express to parse json
*/
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(express.static('public'));

/* 
    Session 
*/
const config = require('./config/config.json');

// used as middleware, sits between the request and the response
app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true,
}));

/* 
    rate limiter 
*/
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


/* 
    Setup Knex with Objection 
*/

const {
    Model
} = require('objection');
const Knex = require('knex');
// knexFile contains our meta information about our connection
const knexFile = require('./knexfile.js');

// Initialize knex  // knex contains the connection
const knex = Knex(knexFile.development); // This is how you can have different environments, eg. Development, Production


// Give the knex instance to objection
// Connect the knex to our objection model, so that objection knows to use knex
Model.knex(knex);

/*
    hashing passwords
/*

// const saltRounds = 12;
// bcrypt.hash('admin_pass', saltRounds, function(err, hash) {
//     console.log('admin:', hash);
// });
// bcrypt.hash('user_pass', saltRounds, function(err, hash) {
//     console.log('user:', hash);
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
const specialtyRoute = require('./routes/specialties.js');
app.use(specialtyRoute);
const authRoute = require('./routes/auth.js');
app.use(authRoute);
// const functionalityRoute = require('./routes/functionality.js');
// app.use(functionalityRoute);
// const sessionRoute = require('./routes/session.js');
// app.use(sessionRoute);

/* 
    Add html files 
*/

const header = fs.readFileSync('./public/fragments/header.html', 'utf8');
const footer = fs.readFileSync('./public/fragments/footer.html', 'utf8');
const indexNav = fs.readFileSync('./public/fragments/indexNav.html', 'utf8');
const homeNav = fs.readFileSync('./public/fragments/homeNav.html', 'utf8');

const home = fs.readFileSync('./public/fragments/home.html', 'utf8');
const index = fs.readFileSync('./public/fragments/index.html', 'utf8');


const goToLoginPage = (req, res, next) => {
    if (!req.session.user) {
        res.redirect('/login');
    } else {
        next();
    }
}

const goToHomePage = (req, res, next) => {
    if (req.session.user) {
        res.redirect('/home-page');
    } else {
        next();
    }
}

app.get('/', goToHomePage, (req, res) => {
    console.log('session: ', req.sessionID);
    console.log('user: ', req.session.user);

    return res.send(header + indexNav + index + footer);

})

app.get('/home-page', goToLoginPage, (req, res) => {
    console.log('session: ', req.sessionID);
    console.log('user: ', req.session.user);

    return res.send(header + homeNav + home + footer)

})

/* 
    Start server 
*/

const PORT = 5000;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log('Server is running on port', PORT);
});