exports.seed = function(knex) {
 
  return knex('users').insert([
    { username: "admin", email: "admin@admin-area.com", password: "admin" }, 
    { username: "user", email: "user@user-area.com", password: "user" }
  ]);

};