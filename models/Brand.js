const { Model } = require('objection');

const Collection = require('./Collection.js');

class Brand extends Model {

    static tableName = 'brands';

    static relationMappings = {
        collection: {
            relation: Model.HasManyRelation,
            modelClass: Collection,
            join: {
                from: 'brands.id',
                to: 'collections.brandId'
            }

        }
    }

}

module.exports = Brand;