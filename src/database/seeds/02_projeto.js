
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projeto').del()
    .then(function () {
      // Inserts seed entries
      return knex('projeto').insert([
        {id_user: 1, name: 'Trabalhando com Java'},
        {id_user: 1, name: 'PHP'},
        {id_user: 1, name: 'HTML e CSS'},
        {id_user: 2, name: 'Python'},
        {id_user: 2, name: 'Ruby'},
        {id_user: 2, name: 'TCC'},
        {id_user: 3, name: 'JS'},
        {id_user: 3, name: 'Node'},
        {id_user: 3, name: 'Node'}
      ]);
    });
};
