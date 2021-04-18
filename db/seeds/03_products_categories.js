exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('product_category')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('product_category').insert([
        { product_id: 1, category_id: 5 },
        { product_id: 2, category_id: 5 },
        { product_id: 3, category_id: 5 },
        { product_id: 4, category_id: 5 }
      ]);
    });
};
