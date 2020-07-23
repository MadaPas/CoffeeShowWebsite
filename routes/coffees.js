const router = require('express').Router();

const Coffee = require('../models/Coffee.js');

// all coffees
router.get('/coffees', async (req, res) => {
    const coffees = await Coffee.query().select();
    return res.send({ response: coffees });
})

// coffees by name
router.get('/coffees/name/:coffee_name', async(req, res) => {
    const foundCoffee = await Coffee.query().select().where({ 'coffee_name': req.params.coffee_name }).limit(1);
    if (foundCoffee.length > 0) {
        return res.send({ response: foundCoffee });
    } else {
        return res.status(400).send({ response: "There were no coffees of the name found." });
    }
})

// coffees by size
router.get('/coffees/size/:coffee_size', async(req, res) => {
    const coffeeSize = await Coffee.query().select().where({ 'coffee_size': req.params.coffee_size });
    if (coffeeSize.length > 0) {
        return res.send({ response: coffeeSize });
    } else {
        return res.status(400).send({ response: "There were no coffees of the requested size found." });
    }
})

// coffees by category
router.get('/coffees/category/:categoryId', async(req, res) => {
    const coffeesCategory = await Coffee.query().select().where({ 'categoryId': req.params.categoryId });
    if (coffeesCategory.length > 0) {
        return res.send({ response: coffeesCategory });
    } else {
        return res.status(400).send({ response: "There were no coffees in the requested category found." });
    }
})


module.exports = router;