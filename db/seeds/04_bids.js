exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('bid')
    .del()
    .then(function () {
      // Inserts seed entries
      /*
      return knex('bid').insert([
        {
          product_id: 1,
          buyer_id: 2,
          price: 450,
        },
        {
          product_id: 1,
          buyer_id: 3,
          price: 550,
        },
        {
          product_id: 1,
          buyer_id: 4,
          price: 650,
        },
      ]);
      */
    });
};
