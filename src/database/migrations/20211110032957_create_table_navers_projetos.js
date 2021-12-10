
exports.up = function (knex) {
  return knex.schema.createTable('naver_projeto', (table) => {
    table.increments('id')

    table.integer('id_naver')
      .unsigned()
      .notNullable()
    table.foreign('id_naver')
      .references('naver.id')
      .onDelete('CASCADE')

    table.integer('id_projeto')
      .unsigned()
      .notNullable()
    table.foreign('id_projeto')
      .references('projeto.id')
      .onDelete('CASCADE')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('naver_projeto')
}
