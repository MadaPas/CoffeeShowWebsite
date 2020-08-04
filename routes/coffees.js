const router = require('express').Router();
const fs = require('fs');

const Coffee = require('../models/Coffee.js');

/* 
    Add html files 
*/
const header = fs.readFileSync('./public/fragments/header.html', 'utf8');
const footer = fs.readFileSync('./public/fragments/footer.html', 'utf8');
const homeNav = fs.readFileSync('./public/fragments/homeNav.html', 'utf8');
const searchCoffees = fs.readFileSync('./public/fragments/search/search-coffees.html', 'utf8');
const chat = fs.readFileSync('./public/fragments/chat/chat.html', 'utf8');


/*
    Secure route
    if there is no user logged in -> redirect to the login page
*/
const login = (req, res, next) => {
    if (!req.session.user) {
        res.redirect('/login');
    } else {
        next();
    }
};

/*
    Displaying the coffee search page
*/
router.get('/search-coffees', login, (req, res) => {
    return res.send(header + homeNav + searchCoffees + chat + footer);
});


/*
    Getting all coffees*
*/
router.get('/coffees', async (req, res) => {
    const coffees = await Coffee.query().select();
    return res.send({ response: coffees });
});

/*
    Getting a specific coffee  (by name)*
*/
router.get('/coffees/name/:name', async (req, res) => {
    const found = await Coffee.query().select().where({ 'name': req.params.name }).limit(1);
    if (found.length > 0) {
        return res.send({  response: found });
    } else {
        return res.status(400).send({ response: 'There were no coffees of this name found.' });
    }
});

/*
    Getting coffees belonging to a specific category (by id)*
*/
router.get('/coffees/category/:categoryId', async (req, res) => {
    const found = await Coffee.query().select().where({ 'categoryId': req.params.categoryId });
    if (found.length > 0) {
        return res.send({ response: found });
    } else {
        return res.status(400).send({ response: 'There were no coffees in the requested category found.' });
    }
});

/*
    Getting a specific coffee (sorted by name & category at the same time)*
*/
router.get('/coffees/name/:name/category/:category', async (req, res) => {
    const name = req.params.name;
    const category = req.params.category;

    const found = await Coffee.query().select('coffees.*', 'categories.category').where({ 'name': name, 'categoryId': category })
        .join('categories', 'coffees.category_id', '=', 'categories.id').limit(1);

    if (found.length > 0) { 
        return res.send({ response: found });
    } else {
        return res.status(400).send({ response: 'There were no coffees of the options selected found.' });
    }

});

module.exports = router;