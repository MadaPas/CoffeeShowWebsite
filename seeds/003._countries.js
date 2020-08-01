exports.seed = function (knex) {

  return knex('countries').insert([{
      name: "Italy"
    },
    {
      name: "Spain"
    },
    {
      name: "Australia"
    },
    {
      name: "UK"
    },
    {
      name: "Turkey"
    },
    {
      name: "Ireland"
    },
    {
      name: "Cuba"
    },
    {
      name: "Arabia"
    },
    {
      name: "US"
    },
    {
      name: "Austria"
    }

  ]);

};