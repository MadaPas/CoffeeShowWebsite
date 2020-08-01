const { Model } = require('objection');

const Country = require('./Country.js');

class Specialty extends Model {

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

module.exports = Specialty;