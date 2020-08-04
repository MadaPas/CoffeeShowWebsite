const router = require('express').Router();

const User = require('../models/User.js');

/*
    Getting a specific user (by it's email)*
*/
router.get('/user/email/:email', async(req, res) => {
    const found = await User.query().select().where({ 'email': req.params.email }).limit(1);
    if (found.length > 0) {
        return res.send({ response: found });
    } else {
        return res.status(400).send({ response: 'The user with this email was not found.' });
    }

});

/*
    Getting a specific user (by it's username)*
*/
router.get('/user/username/:username', async(req, res) => {
    const found = await User.query().select().where({ 'username': req.params.username }).limit(1);
    if (found.length > 0) {
        return res.send({ response: found });
    } else {
        return res.status(400).send({ response: 'The user with this username was not found.' });
    }

});

/*
    Getting a specific user (by it's id)*
*/
router.get('/user/:id', async(req, res) => {
    const found = await User.query().select().where({ 'id': req.params.id }).limit(1);
    if (found.length > 0) {
        return res.send({ response: found });
    } else {
        return res.status(400).send({ response: 'The user with this id was not found.' });
    }

});

module.exports = router;