const { Model } = require('objection');

const Category = require('./Category.js');

class Coffee extends Model {

    static tableName = 'coffees';

    static relationMappings = {
        category: {
            relation: Model.BelongsToOneRelation,
            modelClass: Category,
            join: {
                from: 'coffees.categoryId',
                to: 'categories.id'
            }
        }

    }

}

module.exports = Coffee;