const express = require('express');
const app = express();

const bcrypt = require('bcrypt');
const session = require('express-session');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const http = require('http');

/* 
    Start server 
*/
app.set('port', process.env.PORT || 5000);

const server = http.createServer(app).listen(app.get('port'), () => {
    console.log('Express server is listening on port ' + app.get('port'));
});


/*
    Enable express to parse json
*/
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(express.static('public'));

/* 
    Socket.io
*/
const socket = require('socket.io')
const escape = require('escape-html'); // Escape string for use in HTML
const io = socket.listen(server);

io.on('connection', socket => {

    socket.on('a client wrote this', (data) => {
        // emits to all clients
        io.emit('A client said', {
            message: escape(data.message),
            username: data.username
        });
    });

});


/* 
    Session setup
*/
const config = require('./config/config.json');

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
    max: 100 // limits each IP to 10 requests
});

app.use(limiter);

// set specific limiter for different routes
app.use('/register', limiter);
app.use('/login', limiter);

/* 
    Setup Knex with Objection 
*/
const {
    Model
} = require('objection');
const Knex = require('knex');
const knexFile = require('./knexfile.js'); // contains meta information about the connection

// Initialize knex (contains the connection)
const knex = Knex(knexFile.development);

// Give knex instance to objection
// Connect to objection model, so that objection knows to use knex
Model.knex(knex);

/*
    hashing passwords
*/ 

// const saltRounds = 12;
// bcrypt.hash('madalina', saltRounds, function(err, hash) {
//     console.log('madalina:', hash);
// });
// bcrypt.hash('password', saltRounds, function(err, hash) {
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

/* 
    Add html files 
*/
const header = fs.readFileSync('./public/fragments/header.html', 'utf8');
const footer = fs.readFileSync('./public/fragments/footer.html', 'utf8');
const indexNav = fs.readFileSync('./public/fragments/indexNav.html', 'utf8');
const homeNav = fs.readFileSync('./public/fragments/homeNav.html', 'utf8');
const home = fs.readFileSync('./public/fragments/home.html', 'utf8');
const index = fs.readFileSync('./public/fragments/index.html', 'utf8');
const chat = fs.readFileSync('./public/fragments/chat/chat.html', 'utf8');


/*
    secure route
    if there's no user logged in -> redirect to the login page
*/
const login = (req, res, next) => {
    if (!req.session.user) {
        res.redirect('/login');
    } else {
        next(); // allow the next route to run
    }
}

/*
    secure route
    if there is an user logged in -> redirect to the home user page
*/
const home_page = (req, res, next) => {
    if (req.session.user) {
        res.redirect('/home-page');
    } else {
        next(); // allow the next route to run
    }
}

/*
    Index-page -> for non-logged in users
*/
app.get('/', home_page, (req, res) => {
    return res.send(header + indexNav + index + footer);

})

/*
    Home-page -> for logged in users
*/
app.get('/home-page', login, (req, res) => {
    return res.send(header + homeNav + home + chat + footer)

})

/*
    checking what user is logged in
*/
app.get('/user/userSession', login, (req, res) => {
    if (req.session.user) {
        user = req.session.user;
        return res.send({
            user
        });
    }
    return res.status(404);
});