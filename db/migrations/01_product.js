exports.up = function (knex) {
  return knex.schema.createTable('product', function (table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.text('description').notNullable();
    table.string('img_url').notNullable();
    table.string('sellType').notNullable();
    table.decimal('price').nullable();
    table.string('tags').nullable();
    table.text('details').nullable();
    table.integer('category_id').notNullable();
    table.integer('creator_id').notNullable();
    table.integer('owner_id').notNullable();
    table.boolean('payed').defaultTo(false).notNullable();
    table.timestamps(true,true)
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('product');
};
