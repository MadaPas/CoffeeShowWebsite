exports.seed = function(knex) {

  return knex('collections').del()
    .then(() => {
      return knex('brands').del();
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