exports.seed = function (knex) {

  return knex('users').insert([{
      username: "madalina",
      email: "madalina@email.com",
      password: "$2b$12$R2NYSbiX3JLHUVvS82JiGu8iQq7XTT13cF308U073pbJzjTZ4cZtC"
    }, //madalina
    {
      username: "user",
      email: "user@user-area.com",
      password: "$2b$12$wM6fMzasafLLivokDbnpFezcZzOCkr2lMx2Z/TjG39p0NqH9oNsPm"
    } //password
  ]);

};