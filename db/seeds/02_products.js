exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('product')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('product').insert([
        {
          id: 1,
          name: 'BestDrops First NFT',
          description: 'This is the precious first BestDrops NFT',
          img_url: '/img/chain2.jpeg',
          sellType: 'offer',
          price: 3,
          created_at: Date.now(),
          updated_at: Date.now(),
          creator_id: 1,
          owner_id: 1,
        },
        {
          id: 2,
          name: 'BestDrops About NFT',
          description: 'This is the precious second BestDrops NFT',
          img_url: '/img/about3.jpeg',
          sellType: 'offer',
          price: 2.5,
          created_at: Date.now(),
          updated_at: Date.now(),
          creator_id: 1,
          owner_id: 1,
        },
        {
          id: 3,
          name: 'BestDrops Global NFT',
          description: 'This is the precious global figure BestDrops NFT',
          img_url: '/img/about-chain.jpeg',
          sellType: 'auction',
          price: 2,
          created_at: Date.now(),
          updated_at: Date.now(),
          creator_id: 1,
          owner_id: 1,
        },
        {
          id: 4,
          name: 'BestDrops Logo NFT',
          description: 'This is the precious BestDrops Logo NFT',
          img_url: '/img/logo.png',
          sellType: 'offer',
          price: 1.5,
          created_at: Date.now(),
          updated_at: Date.now(),
          creator_id: 1,
          owner_id: 1,
        }
      ]);
    });
};
