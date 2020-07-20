const { Model } = require('objection');

const Brand = require('./Brand.js');

class Collection extends Model {

    static tableName = 'collections';

    static relationMappings = {
        brand: {
            relation: Model.HasManyRelation,
            modelClass: Brand,
            join: {
                from: 'collections.brandId',
                to: 'brands.id'
            }
        }

    }

}

module.exports = Collection;