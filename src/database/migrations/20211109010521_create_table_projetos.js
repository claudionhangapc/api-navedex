

exports.up = function(knex) {
  return knex.schema.createTable('projeto', (table) => {
    table.increments('id')
    
    table.string('name')

    table.foreign('id_user')
    .references('user.id')
  
    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('projeto')
};

