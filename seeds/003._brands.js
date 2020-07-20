exports.seed = function(knex) {
 
  return knex('brand').insert([
    { name: "cold-coffee-brand", address: "COLD-line street" },
    { name: "hot-coffee-brand", address: "HOT-line street" },
    { name: "coffee-beans-brand", address: "BEANS-street"},
    { name: "tea-brand", address: "DECAF sad-*tea*-street RIP" }
  ]);

};