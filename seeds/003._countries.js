exports.seed = function(knex) {
 
  return knex('countries').insert([
    { name: "Turkey", story: "" },
    { name: "Italy", story: "" },
    { name: "", story: ""},
    { name: "", story: "" }
  ]);

};