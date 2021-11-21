
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('naver').del()
    .then(function () {
      // Inserts seed entries
      return knex('naver').insert([
        {
          job_role: "Desenvolvedor",
          admission_date: "19/08/2018",
          birthdate: "12/04/1992",
          name: "Christian Tavares",
          id_user:1,
        },
        {
          job_role: "Teste",
          admission_date: "19/08/2018",
          birthdate: "12/04/1992",
          name: "Daina",
          id_user:1,
        },
        {
          job_role: "Teste",
          admission_date: "19/08/2018",
          birthdate: "12/04/1992",
          name: "Daina",
          id_user:2,
        },
        {
          job_role: "Teste",
          admission_date: "19/08/2018",
          birthdate: "12/04/1992",
          name: "Daina",
          id_user:2,
        }
      ]);
    });
};
