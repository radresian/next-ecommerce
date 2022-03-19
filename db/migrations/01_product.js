exports.up = function (knex) {
  return knex.schema.createTable('product', function (table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.string('img_url').notNullable();
    table.string('sellType').notNullable();
    table.decimal('price').nullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.integer('creator_id').notNullable();
    table.integer('owner_id').notNullable();
    table.boolean('payed').defaultTo(false).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('product');
};
