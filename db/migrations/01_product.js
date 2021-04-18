exports.up = function (knex) {
  return knex.schema.createTable('product', function (table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('tokenId').notNullable();
    table.string('title').nullable();
    table.string('description').notNullable();
    table.string('image').notNullable();
    table.string('sellType').notNullable();
    table.decimal('price').nullable();
    table.decimal('reservePrice').nullable();
    table.decimal('rating').notNullable();
    table.timestamp('created_at').defaultTo('now()').notNullable();
    table.timestamp('updated_at').defaultTo('now()').notNullable();

    table
      .string('user_id')
      .notNullable()
      .references('id')
      .inTable('user')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('product');
};
