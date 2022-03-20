const bcrypt = require('bcrypt');

exports.seed = async function (knex) {
  const cryptoPassword = await bcrypt.hashSync('123456', 10);
  // Deletes ALL existing entries
  return knex('user')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          id: 1,
          name: 'admin',
          email: 'admin@bestdrops.com',
          password: cryptoPassword,
          wallet: '1',
          twitter:'admin',
          instagram: '',
          creator: true,
          detail: '{}',
        },
        {
          id: 2,
          name: 'apo',
          email: 'apo@bestdrops.com',
          password: cryptoPassword,
          wallet: '2',
          twitter:'apo',
          instagram: '',
          creator: true,
          detail: '{}',
        },
        {
          id: 3,
          name: 'selo',
          email: 'selo@bestdrops.com',
          password: cryptoPassword,
          wallet: '3',
          twitter:'selo',
          instagram: '',
          creator: true,
          detail: '{}',
        },
        {
          id: 4,
          name: 'tafo',
          email: 'tafo@bestdrops.com',
          password: cryptoPassword,
          wallet: '4',
          twitter:'tafo',
          instagram: '',
          creator: true,
          detail: '{}',
        }
      ]);
    });
};
