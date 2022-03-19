exports.up = function (knex) {
  knex.schema.dropTable('user');
  return knex.schema.createTable('user', function (table) {
    table.string('id').primary();
    table.string('name').nullable();
    table.string('userName').nullable();
    table.string('password').nullable();
    table.string('email').unique().nullable();
    table.string('wallet').nullable();
    table.string('twitter').unique().nullable();
    table.string('instagram').nullable();
    table.boolean('creator').defaultTo(true).notNullable();
    table.string('detail').nullable();
    table.string('description').nullable();
    table.binary('profilePhoto').nullable();
    table.binary('coverImage').nullable();
    table.string('createdAt').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('user');
};
