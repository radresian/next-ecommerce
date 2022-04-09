exports.up = function (knex) {

};

exports.down = function (knex) {
  return knex.schema.dropTable('product_category');
};
