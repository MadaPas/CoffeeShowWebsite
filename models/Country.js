const { Model } = require('objection');

const Specialty = require('./Specialty.js');

class Country extends Model {

    static tableName = 'countries';

    static relationMappings = {
        specialty: {
            relation: Model.HasManyRelation,
            modelClass: Specialty,
            join: {
                from: 'countries.id',
                to: 'specialties.countryId'
            }

        }
    }

}

module.exports = Country;