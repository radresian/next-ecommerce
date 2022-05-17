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
          name: 'eNeF-Turk',
          userName: 'eNeF-Turk',
          email: 'admin@enefturk.com',
          password: cryptoPassword,
          wallet: '***',
          twitter:'enefturk',
          instagram: 'enefturk',
          creator: true,
          detail: '{}',
          description: 'eNeF-Turk uygulama resmi yöneticisi',
          profilePhoto: '/img/logo.png',
          coverImage: '/img/nft.webp'
        }
      ]);
    });
};
