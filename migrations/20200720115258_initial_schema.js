exports.up = function (knex) {

    return knex.schema
        .createTable('users', (table) => {
            table.increments('id');
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
            table.string('name').notNullable();
            table.text('description');
            table.integer('price');
            table.string('weight');
            table.string('picture');
            table.string('size');

            table.integer('category_id').notNullable();
            table.foreign('category_id').references('categories.id');
        })
        .createTable('countries', (table) => {
            table.increments('id').notNullable();
            table.string('name').notNullable();
        })
        .createTable('specialties', (table) => {
            table.increments('id').notNullable();

            table.integer('coffee_id').notNullable();
            table.foreign('coffee_id').references('coffees.id');

            table.integer('country_id').unsigned().notNullable();
            table.foreign('country_id').references('countries.id');
        });

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('specialties')
        .dropTableIfExists('countries')
        .dropTableIfExists('coffees')
        .dropTableIfExists('categories')
        .dropTableIfExists('users');
};