const {
    Model
} = require('objection');

const Coffee = require('./Coffee.js');

class Category extends Model {

    static tableName = 'categories';

    static relationMappings = {
        coffee: {
            relation: Model.HasManyRelation,
            modelClass: Coffee,
            join: {
                from: 'categories.id',
                to: 'coffees.categoryId'
            }

        }
    }

}

module.exports = Category;