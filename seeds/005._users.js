exports.seed = function (knex) {

  return knex('users').insert([{
      username: "madalina",
      email: "madalina@email.com",
      password: "$2b$12$HX62.pngv.KlAIIGQuk7H.4u3NuetCuS2OjRKBuapd8zm7jJO13bS"
    }, //madalina
    {
      username: "user",
      email: "user@user-area.com",
      password: "$2b$12$YR3yXYNTxJs9ZeDatAHt2eaR9UQQYkr0itmSuxAUwW30oSf8lfP0a"
    } //password
  ]);

};