exports.seed = function (knex) {

  return knex('specialties').del()
    .then(() => {
      return knex('countries').del();
    })
    .then(() => {
      return knex('coffees').del();
    })
    .then(() => {
      return knex('categories').del();
    })
    .then(() => {
      return knex('users').del();
    });

};