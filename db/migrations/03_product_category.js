exports.up = function (knex) {
  return knex.schema.createTable('product_category', function (table) {
    table.increments('id').primary();

    table
      .integer('product_id')
      .notNullable()

    table
      .integer('category_id')
      .notNullable()
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('product_category');
};
