
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('naver_projeto').del()
    .then(function () {
      // Inserts seed entries
      return knex('naver_projeto').insert([
        {id_naver: 1, id_projeto: 1},
        {id_naver: 1, id_projeto: 2},
        {id_naver: 2, id_projeto: 1},
        {id_naver: 2, id_projeto: 2}
      
      ]);
    });
};
