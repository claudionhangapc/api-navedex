const path = require("path");

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database:'navedex',
      user:'postgres',
      password:'root1234'
    },
    migrations:{
      tableName:'knex_migrations',
      directory: path.resolve(__dirname,"src", "database", "migrations")
    }
  },

};
