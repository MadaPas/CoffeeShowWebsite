const { Model } = require('objection');

const Collection = require('./Specialty.js');

class Country extends Model {

    static tableName = 'countries';

    static relationMappings = {
        collection: {
            relation: Model.HasManyRelation,
            modelClass: Collection,
            join: {
                from: 'countries.id',
                to: 'collections.countryId'
            }

        }
    }

}

module.exports = Country;