exports.seed = function (knex) {

  return knex('countries').select().then(countries => {

    return knex('specialties').insert([{
        coffee_id: 1,
        country_id: countries.find(country => country.name === 'UK').id
      },
      {
        coffee_id: 2,
        country_id: countries.find(country => country.name === 'UK').id
      },
      {
        coffee_id: 3,
        country_id: countries.find(country => country.name === 'UK').id
      },
      {
        coffee_id: 4,
        country_id: countries.find(country => country.name === 'UK').id
      },
      {
        coffee_id: 5,
        country_id: countries.find(country => country.name === 'UK').id
      },
      {
        coffee_id: 6,
        country_id: countries.find(country => country.name === 'UK').id
      },
      {
        coffee_id: 7,
        country_id: countries.find(country => country.name === 'UK').id
      },
      {
        coffee_id: 8,
        country_id: countries.find(country => country.name === 'UK').id
      },
      {
        coffee_id: 9,
        country_id: countries.find(country => country.name === 'UK').id
      },
      {
        coffee_id: 10,
        country_id: countries.find(country => country.name === 'UK').id
      },
      {
        coffee_id: 11,
        country_id: countries.find(country => country.name === 'UK').id
      },
      {
        coffee_id: 12,
        country_id: countries.find(country => country.name === 'UK').id
      },
      {
        coffee_id: 13,
        country_id: countries.find(country => country.name === 'UK').id
      },
      {
        coffee_id: 14,
        country_id: countries.find(country => country.name === 'UK').id
      },
      {
        coffee_id: 15,
        country_id: countries.find(country => country.name === 'Italy').id
      },
      {
        coffee_id: 16,
        country_id: countries.find(country => country.name === 'Italy').id
      },
      {
        coffee_id: 17,
        country_id: countries.find(country => country.name === 'Italy').id
      },
      {
        coffee_id: 18,
        country_id: countries.find(country => country.name === 'Italy').id
      },
      {
        coffee_id: 19,
        country_id: countries.find(country => country.name === 'Italy').id
      },
      {
        coffee_id: 20,
        country_id: countries.find(country => country.name === 'Turkey').id
      },
      {
        coffee_id: 21,
        country_id: countries.find(country => country.name === 'Spain').id
      },
      {
        coffee_id: 22,
        country_id: countries.find(country => country.name === 'Ireland').id
      },
      {
        coffee_id: 23,
        country_id: countries.find(country => country.name === 'Cuba').id
      },
      {
        coffee_id: 24,
        country_id: countries.find(country => country.name === 'Italy').id
      },
      {
        coffee_id: 25,
        country_id: countries.find(country => country.name === 'Spain').id
      },
      {
        coffee_id: 26,
        country_id: countries.find(country => country.name === 'Arabia').id
      },
      {
        coffee_id: 27,
        country_id: countries.find(country => country.name === 'Italy').id
      },
      {
        coffee_id: 28,
        country_id: countries.find(country => country.name === 'Italy').id
      },
      {
        coffee_id: 29,
        country_id: countries.find(country => country.name === 'US').id
      },
      {
        coffee_id: 30,
        country_id: countries.find(country => country.name === 'US').id
      },
      {
        coffee_id: 31,
        country_id: countries.find(country => country.name === 'Spain').id
      },
      {
        coffee_id: 32,
        country_id: countries.find(country => country.name === 'Arabia').id
      },
      {
        coffee_id: 33,
        country_id: countries.find(country => country.name === 'Italy').id
      },
      {
        coffee_id: 34,
        country_id: countries.find(country => country.name === 'Italy').id
      },
      {
        coffee_id: 35,
        country_id: countries.find(country => country.name === 'Spain').id
      },
      {
        coffee_id: 36,
        country_id: countries.find(country => country.name === 'US').id
      },
      {
        coffee_id: 37,
        country_id: countries.find(country => country.name === 'Italy').id
      },
      {
        coffee_id: 38,
        country_id: countries.find(country => country.name === 'Australia').id
      },
      {
        coffee_id: 39,
        country_id: countries.find(country => country.name === 'Italy').id
      },
      {
        coffee_id: 40,
        country_id: countries.find(country => country.name === 'Italy').id
      },
      {
        coffee_id: 41,
        country_id: countries.find(country => country.name === 'Austria').id
      },
      {
        coffee_id: 42,
        country_id: countries.find(country => country.name === 'Italy').id
      },
      {
        coffee_id: 43,
        country_id: countries.find(country => country.name === 'Italy').id
      },
      {
        coffee_id: 44,
        country_id: countries.find(country => country.name === 'US').id
      },
      {
        coffee_id: 45,
        country_id: countries.find(country => country.name === 'Arabia').id
      },
      {
        coffee_id: 46,
        country_id: countries.find(country => country.name === 'Turkey').id
      },
      {
        coffee_id: 47,
        country_id: countries.find(country => country.name === 'Italy').id
      },
      {
        coffee_id: 48,
        country_id: countries.find(country => country.name === 'Italy').id
      },
      {
        coffee_id: 49,
        country_id: countries.find(country => country.name === 'Italy').id
      },
      {
        coffee_id: 50,
        country_id: countries.find(country => country.name === 'Austria').id
      },
      {
        coffee_id: 51,
        country_id: countries.find(country => country.name === 'Italy').id
      },
      {
        coffee_id: 52,
        country_id: countries.find(country => country.name === 'Italy').id
      },
      {
        coffee_id: 53,
        country_id: countries.find(country => country.name === 'Arabia').id
      },
      {
        coffee_id: 54,
        country_id: countries.find(country => country.name === 'Arabia').id
      },
      {
        coffee_id: 55,
        country_id: countries.find(country => country.name === 'Italy').id
      },
      {
        coffee_id: 56,
        country_id: countries.find(country => country.name === 'Italy').id
      },
      {
        coffee_id: 57,
        country_id: countries.find(country => country.name === 'Italy').id
      },
      {
        coffee_id: 58,
        country_id: countries.find(country => country.name === 'Italy').id
      }

    ]);

  })
};