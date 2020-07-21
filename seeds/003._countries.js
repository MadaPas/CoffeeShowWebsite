exports.seed = function(knex) {
 
  return knex('countries').insert([
    { name: "Italy", story: "" },  
    { name: "Spain", story: "" },
    { name: "Australia", story: ""},
    { name: "UK", story: "" },
    { name: "Turkey", story: "" },
    { name: "Ireland", story: "" }, 
    { name: "Cuba", story: "" }, 
    { name: "Arabia", story: "" }, 
    { name: "US", story: "" },
    { name: "Austria", story: "" }

  ]);

};