exports.seed = function(knex) {
 
  return knex('brands').select().then(brands => {





    exports.seed = function(knex) {
 
      return knex('brands').insert([
        { name: "cold-coffee-brand", address: "COLD-line street" },
        { name: "hot-coffee-brand", address: "HOT-line street" },
        { name: "coffee-beans-brand", address: "BEANS-street"},
        { name: "tea-brand", address: "DECAF sad-*tea*-street RIP" }
      ]);
    
    };
    
    return knex('collections').insert([
      { coffee_id: 1, brand_id: brands.find(brand => brand.name === 'coffee-beans-brand').id },
      { coffee_id: 2, brand_id: brands.find(brand => brand.name === 'coffee-beans-brand').id },
      { coffee_id: 3, brand_id: brands.find(brand => brand.name === 'coffee-beans-brand').id },
      { coffee_id: 4, brand_id: brands.find(brand => brand.name === 'coffee-beans-brand').id },
      { coffee_id: 5, brand_id: brands.find(brand => brand.name === 'coffee-beans-brand').id },
      { coffee_id: 6, brand_id: brands.find(brand => brand.name === 'coffee-beans-brand').id },
      { coffee_id: 7, brand_id: brands.find(brand => brand.name === 'tea-brand').id },
      { coffee_id: 8, brand_id: brands.find(brand => brand.name === 'tea-brand').id },
      { coffee_id: 9, brand_id: brands.find(brand => brand.name === 'tea-brand').id },
      { coffee_id: 10, brand_id: brands.find(brand => brand.name === 'tea-brand').id },
      { coffee_id: 11, brand_id: brands.find(brand => brand.name === 'tea-brand').id },
      { coffee_id: 12, brand_id: brands.find(brand => brand.name === 'tea-brand').id },
      { coffee_id: 13, brand_id: brands.find(brand => brand.name === 'tea-brand').id },
      { coffee_id: 14, brand_id: brands.find(brand => brand.name === 'tea-brand').id },
      { coffee_id: 15, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 16, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 17, brand_id: brands.find(brand => brand.name === 'cold-coffee-brand').id },
      { coffee_id: 18, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 19, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 20, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 21, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 22, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 23, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 24, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 25, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 26, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 27, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 28, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 29, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 30, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 31, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 32, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 33, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 34, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 35, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 36, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 37, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 38, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 39, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 40, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 41, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 42, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 43, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 44, brand_id: brands.find(brand => brand.name === 'cold-coffee-brand').id },
      { coffee_id: 45, brand_id: brands.find(brand => brand.name === 'cold-coffee-brand').id },
      { coffee_id: 46, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 47, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 48, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 49, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 50, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 51, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 52, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 53, brand_id: brands.find(brand => brand.name === 'hot-coffee-brand').id },
      { coffee_id: 54, brand_id: brands.find(brand => brand.name === 'cold-coffee-brand').id },
      { coffee_id: 55, brand_id: brands.find(brand => brand.name === 'cold-coffee-brand').id },
      { coffee_id: 56, brand_id: brands.find(brand => brand.name === 'cold-coffee-brand').id },
      { coffee_id: 57, brand_id: brands.find(brand => brand.name === 'cold-coffee-brand').id },
      { coffee_id: 58, brand_id: brands.find(brand => brand.name === 'cold-coffee-brand').id }

    ]);

  })
};