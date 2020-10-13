const router = require('express').Router();
const emailValidator = require('email-validator'); // checks email-form
const fs = require('fs');

const User = require('../models/User.js');

/* 
    Bcrypt 
*/
const bcrypt = require('bcrypt');
const saltRounds = 12;

/* 
    Add html files 
*/
const header = fs.readFileSync('./public/fragments/header.html', 'utf8');
const indexNav = fs.readFileSync('./public/fragments/indexNav.html', 'utf8');
const footer = fs.readFileSync('./public/fragments/footer.html', 'utf8');
const register = fs.readFileSync('./public/auth/register.html', 'utf8');
const login = fs.readFileSync('./public/auth/login.html', 'utf8');

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
    Register page (if there's an user logged in already, redirects to user home-page)
*/
router.get('/register', home_page, (req, res) => {
    return res.send(header + indexNav + register + footer);
});

/*
    Login page (if there's an user logged in already, redirects to user home-page)
*/
router.get('/login', home_page, (req, res) => {
    return res.send(header + indexNav + login + footer);
});


/*
    Register post request
*/
router.post('/register', async (req, res) => {

    const {
        username,
        email,
        password,
        repeatedPass
    } = req.body;
    const samePassword = password === repeatedPass;

    if (username && email && password && samePassword) {

        if (password.length < 8) {
            return res.status(400).send({
                response: 'This password does not fulfill the requirements.'
            });
        } else if (!emailValidator.validate(email)) {
            return res.status(400).send({
                response: 'This email is not valid.'
            });
        } else {

            try {
                const userFound = await User.query().select().where({
                    'username': username
                }).limit(1);
                const emailFound = await User.query().select().where({
                    'email': email
                }).limit(1);

                if (userFound.length > 0 || emailFound.length > 0) {

                    return res.redirect('/register?error');

                } else {

                    const hashedPassword = await bcrypt.hash(password, saltRounds);
                    const createdUser = await User.query().insert({
                        username,
                        email,
                        password: hashedPassword
                    });

                    req.session.user = username;
                    return res.redirect('/login');
                }

            } catch (error) {
                return res.status(500).send({
                    response: 'Something went wrong with the database.'
                });
            }
        }
    } else if (password && repeatedPass && !samePassword) {
        return res.status(400).send({
            response: 'The passwords do not match.'
        });
    } else {
        return res.status(404).send({
            response: 'There are missing fields.'
        });
    }

});


/*
    Login post request 
*/
router.post('/login', async (req, res) => {

    const {
        username,
        password
    } = req.body;

    if (username && password) {
        try {
            User.query().select('username').where({
                    'username': username
                })
                .then(async userFound => {
                    if (userFound.length == 0) {
                        return res.redirect('/login?error');
                    } else {
                        const userPassword = await User.query().select('password').where({
                            'username': username
                        }).limit(1);
                        const validatePassword = userPassword[0].password;

                        bcrypt.compare(password, validatePassword).then((result) => {
                            if (result) {
                                req.session.user = username;
                                return res.redirect('/home-page');
                            } else {
                                return res.redirect('login?error');
                            }
                        });
                    }

                });
        } catch (error) {
            return res.redirect('/login?error');
        }

    } else {
        return res.redirect('/login?error');
    }

});

/*
    Logout
*/
router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                return next(err);
            } else {
                return res.redirect('/');
            }
        });
    }
});

module.exports = router;