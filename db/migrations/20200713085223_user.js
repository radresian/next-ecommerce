exports.up = function (knex) {
  return knex.schema.createTable('user', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('password').notNullable();
    table.string('email').unique().notNullable();
    table.string('wallet').unique().notNullable();
    table.string('twitter').unique().notNullable();
    table.string('instagram').nullable();
    table.boolean('creator').notNullable();
    table.string('category').nullable();
    table.string('detail').nullable();
    table.string('createdAt').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('user');
};
