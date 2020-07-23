const router = require('express').Router();

const Specialty = require('../models/Specialty.js');

router.get('/specialties/coffee/:id', async(req, res) => {
    const specialties = await Specialty.query().select().where({ 'coffeeId': req.params.id }); // coffeeId
    if (specialties.length > 0) {
        return res.send({ response: specialties });
    } else {
        return res.status(400).send({ response: "There were no specialties of the coffee found." });
    }

})

router.get('/specialties/country/:id', async(req, res) => {
    const specialties = await Specialty.query().select().where({ 'countryId': req.params.id  }); // countryId
    if (specialties.length > 0) {
        return res.send({ response: specialties });
    } else {
        res.status(400).send({ response: "There was no specialty of the country found." });
    }

})

module.exports = router;