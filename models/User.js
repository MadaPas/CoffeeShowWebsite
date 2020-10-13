const {
    Model
} = require('objection');

class User extends Model {

    static tableName = 'users';
    // no relation mappings so far
}

module.exports = User;