
exports.up = function (knex) {
  return knex.schema.createTable('user', (table) => {
    table.increments('id')

    table.string('email').notNullable()

    table.string('password').notNullable()

    table.unique('email')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('user')
}
