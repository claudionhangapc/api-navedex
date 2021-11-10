
exports.up = function(knex) {
  return knex.schema.createTable('naver', (table) => {
    table.increments('id')
    
    table.string('name')

    table.date('birthdate')

    table.date('admission_date')

    table.string('job_role')
    
    table.integer('id_user')
         .unsigned()
         .notNullable()
    table.foreign('id_user')
      .references('user.id')
    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('naver')
};