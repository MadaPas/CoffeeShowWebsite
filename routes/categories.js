const router = require('express').Router();

const Category = require('../models/Category.js');

/*
    Getting all categories
*/
router.get('/categories', async (req, res) => {
    const categories = await Category.query().select();
    return res.send({
        response: categories
    });
});

/*
   Getting a category name by searching with the id 
*/
router.get('/categories/:id', async (req, res) => {
    const foundCategory = await Category.query().select('category').where({
        'id': req.params.id
    }).limit(1);
    if (foundCategory.length > 0) {
        return res.send({
            response: foundCategory
        });
    } else {
        return res.status(400).send({
            response: 'Could not find any category of the requested id.'
        });
    }
});

/*
    Getting a category id by searching with the name
*/
router.get('/categories/name/:category_name', async (req, res) => {
    const foundCategory = await Category.query().select('id').where({
        'category': req.params.category_name
    }).limit(1);
    if (foundCategory.length > 0) {
        return res.send({
            response: foundCategory
        });
    } else {
        return res.status(400).send({
            response: 'Could not find any category of the requested name.'
        });
    }
});

module.exports = router;