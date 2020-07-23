const { Model } = require('objection');

const Country = require('./Country.js');

class Collection extends Model {

    static tableName = 'specialties';

    static relationMappings = {
        country: {
            relation: Model.HasManyRelation,
            modelClass: Country,
            join: {
                from: 'specialties.countryId',
                to: 'countries.id'
            }
        }

    }

}

module.exports = Collection;