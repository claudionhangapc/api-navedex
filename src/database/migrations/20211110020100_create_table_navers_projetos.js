

exports.up = function(knex) {
  return knex.schema.createTable('naver_projeto', (table) => {
    table.increments('id')
    
    table.foreign('id_naver')
    .references('naver.id')

    table.foreign('id_projeto')
    .references('projeto.id')
    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('naver_projeto')
};

