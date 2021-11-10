
exports.up = function(knex) {
  return knex.schema.createTable('user', (table) => {
    table.increments('id')
    
    table.string('email')

    table.string('password')
    
    table.unique('email')
    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user')
};
