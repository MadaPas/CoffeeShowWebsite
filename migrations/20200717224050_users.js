exports.up = function(knex) {
  
    return knex.schema
        .createTable('users', (table) => {
            table.increments('id').notNullable();
            table.string('username').unique().notNullable();
            table.string('email').unique().notNullable();
            table.string('password').notNullable();

            table.dateTime('updated_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'));
            table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        })
        .createTable('categories', (table) => {
            table.integer('id').unique().notNullable();
            table.string('category').unique().notNullable();
        })
        .createTable('coffees', (table) => {
            table.integer('id').unique().notNullable();
            table.string('coffee_name').notNullable();
            table.string('description');
            table.integer('price');
            table.double('weight');
            table.string('picture');
            
            table.integer('category_id').unsign().notNullable();
            table.foreign('category_id').refences('categories.id');
        })
        .createTable('brands', (table) => {
            table.increments('id').notNullable();
            table.string('name').notNullable();
            table.string('address').notNullable();
        })
        .createTable('collections', (table) => {
            table.increments('id').notNullable();
            
            table.integer('coffee_id').unsigned().notNullable();
            table.foreign('coffee_id').refences('coffees.id');

            table.integer('brand_id').unsigned().notNullable();
            table.foreign('brand_id').refences('brands.id');
        });

};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('collections')
        .dropTableIfExists('brands')
        .dropTableIfExists('coffees')
        .dropTableIfExists('categories')
        .dropTableIfExists('users');
};