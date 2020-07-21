const { Model } = require('objection');

const Country = require('./Country.js');

class Collection extends Model {

    static tableName = 'collections';

    static relationMappings = {
        country: {
            relation: Model.HasManyRelation,
            modelClass: Country,
            join: {
                from: 'collections.countryId',
                to: 'countries.id'
            }
        }

    }

}

module.exports = Collection;