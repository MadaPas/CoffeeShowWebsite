const router = require('express').Router();

const Country = require('../models/Country.js');

/*
    Getting all countries*
*/
router.get('/countries', async(req, res) => {
    const countries = await Country.query().select();
    return res.send({ response: countries });
})

/*
    Getting a specific country (by name)*
*/
router.get('/countries/name/:name', async(req, res) => {
    const countryFound = await Country.query().select().where({ 'name': req.params.name }).limit(1);
    if (countryFound.length > 0) {
        return res.send({ response: countryFound });
    } else {
        return res.status(400).send({ response: "There was no country of the name found." });
    }

})

module.exports = router;