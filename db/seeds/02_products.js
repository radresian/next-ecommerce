exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('product')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('product').insert([
        {
          name: 'eNeF-Turk ilk',
          description: 'eNeF-Turk uygulama satisa sunulan ilk NFT\'si.',
          img_url: '/img/chain2.jpeg',
          sellType: 'fixed',
          price: 3000,
          creator_id: 1,
          owner_id: 1,
          category_id: 1,
        },
        {
          name: 'eNeF-Turk Hakkimizda',
          description: 'eNeF-Turk uygulamasinin hakkimizda sayfasini temsil eden NFT',
          img_url: '/img/nft_1320x742.jpeg',
          sellType: 'fixed',
          price: 2500,
          creator_id: 1,
          owner_id: 1,
          category_id: 1,
        },
        {
          name: 'eNeF-Turk NFT Cesitleri',
          description: 'eNeF-Turk uygulamasinin cesitliligini temsil eden NFT',
          img_url: '/img/nft-01.png',
          sellType: 'fixed',
          price: 2500,
          creator_id: 1,
          owner_id: 1,
          category_id: 1,
        },
        {
          name: 'eNeF-Turk Global',
          description: 'eNeF-Turk uygulamasini global olarak temsil eden NFT',
          img_url: '/img/about-chain.jpeg',
          sellType: 'auction',
          price: 4000,
          creator_id: 1,
          owner_id: 1,
          category_id: 1,
        },
        {
          name: 'eNeF-Turk Teknoloji',
          description: 'eNeF-Turk Teknoloji alt yapisi.',
          img_url: '/img/nft-2.jpeg',
          sellType: 'fixed',
          price: 3500,
          creator_id: 1,
          owner_id: 1,
          category_id: 1,
        },
        {
          name: 'eNeF-Turk NFT Dunyasina Giris',
          description: 'eNeF-Turk uygulamasi ile NFT dunyasina girisin temsili.',
          img_url: '/img/enter-NFT.jpeg',
          sellType: 'fixed',
          price: 2000,
          creator_id: 1,
          owner_id: 1,
          category_id: 1,
        },
        {
          name: 'eNeF-Turk Dijital Altin',
          description: 'eNeF-Turk uygulamasi ile alacaginiz NFT ler yeni dunyanin dijital altini.',
          img_url: '/img/NFT-gold.png',
          sellType: 'fixed',
          price: 2500,
          creator_id: 1,
          owner_id: 1,
          category_id: 1,
        },
        {
          name: 'eNeF-Turk ile acik artirma',
          description: 'eNeF-Turk uygulamasi ile sanatcilarimiza acik artirma ile satis imkani.',
          img_url: '/img/auction.jpeg',
          sellType: 'fixed',
          price: 2000,
          creator_id: 1,
          owner_id: 1,
          category_id: 1,
        }
      ]);
    });
};
