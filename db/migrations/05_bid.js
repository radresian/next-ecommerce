exports.up = function (knex) {
  return knex.schema.createTable('bid', function (table) {
    table.integer('product_id').notNullable();
    table.integer('buyer_id').notNullable();
    table.decimal('price').notNullable();
    table.boolean('minted').defaultTo(false).notNullable();
    table.boolean('returned').defaultTo(false).notNullable();
    table.boolean('highest').defaultTo(true).notNullable();
    table.boolean('first').defaultTo(true).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('category');
};
