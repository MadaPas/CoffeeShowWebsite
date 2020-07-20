const router = require('express').Router();

const User = require('../models/User.js');

router.get('/user/email/:email', async(req, res) => {
    const found = await User.query().select('email').where({ 'email': req.params.email }).limit(1);
    if (found.length > 0) {
        return res.send({ response: found });
    } else {
        return res.status(400).send({ response: "The user with This email is not found." });
    }

})

router.get('/user/username/:username', async(req, res) => {
    const found = await User.query().select('username').where({ 'username': req.params.username }).limit(1);
    if (found.length > 0) {
        return res.send({ response: found });
    } else {
        return res.status(400).send({ response: "The user with this username is not found." });
    }

})

module.exports = router;