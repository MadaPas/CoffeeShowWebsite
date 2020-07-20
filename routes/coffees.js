const router = require('express').Router();

const Coffee = require('../models/Coffee.js');

router.get('/coffees', async (req, res) => {
    const coffees = await Coffee.query().select();
    return res.send({ response: coffees });
})

router.get('/coffees/category/:categoryId', async(req, res) => {
    const coffeesInCategory = await Coffee.query().select().where({ 'categoryId': req.params.categoryId });
    if (coffeesInCategory.length > 0) {
        return res.send({ response: coffeesInCategory });
    } else {
        return res.status(400).send({ response: "No coffee in the requested category has found." });
    }

})

router.get('/coffees/name/:coffee_name', async(req, res) => {
    const found = await Coffee.query().select().where({ 'coffee_name': req.params.coffee_name }).limit(1);
    if (found.length > 0) {
        return res.send({ response: found });
    } else {
        return res.status(400).send({ response: "No coffee of the name has found." });
    }
})

module.exports = router;