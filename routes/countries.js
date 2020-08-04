const router = require('express').Router();

const Country = require('../models/Country.js');

/*
    Getting all countries*
*/
router.get('/countries', async (req, res) => {
    const countries = await Country.query().select();
    return res.send({
        response: countries
    });
});

/*
    Getting a specific country (by name)*
*/
router.get('/countries/name/:name', async (req, res) => {
    const countryFound = await Country.query().select().where({
        'name': req.params.name
    }).limit(1);
    if (countryFound.length > 0) {
        return res.send({
            response: countryFound
        });
    } else {
        return res.status(400).send({
            response: 'There was no country of the name found.'
        });
    }

});


// late tries :)

/*
    Post route - adding a new country to the db
*/
router.post('/countries/add', async (req, res) => {
    const { name } = req.body;
    console.log(name);
    if (name) {
        try {
            await Country.query().insert({ name: name })
            .then(newItem => {
                console.log(newItem);
                return res.redirect('/countries');
            });
        } catch (error) {
            return res.send({ response: 'Something went wrong with the DB.' });
        }
    }
});

/*
    Delete route - deleting a country from the db
*/

router.delete('/countries/delete/:id', async (req, res) => {
    await Country.query().deleteById(req.params.id).then(() => {
        return res.send({ response: 'Country deleted!' });
    })
});

module.exports = router;