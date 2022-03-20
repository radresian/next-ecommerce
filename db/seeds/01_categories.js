exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('category')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {
          id: 1,
          name: 'artworks',
          label: 'Artworks',
          md_icon: 'MdArtwork',
        },
        {
          id: 2,
          name: 'celebrities',
          label: 'Celebrities',
          md_icon: 'MdCelebrities',
        },
        {
          id: 3,
          name: 'movieChars',
          label: 'Movie Characters',
          md_icon: 'MdMovieChars',
        },
        {
          id: 4,
          name: 'sport',
          label: 'Sport',
          md_icon: 'MdSport',
        },
        {
          id: 5,
          name: 'game',
          label: 'Game',
          md_icon: 'MdGame',
        },
        {
          id: 6,
          name: 'other',
          label: 'Other',
          md_icon: 'MdOther',
        }
      ]);
    });
};
