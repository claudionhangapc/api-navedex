const bcrypt = require('bcrypt')
const PASSWORD_SALT = 10

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        { email: 'emaildteste@gmail.com', password: bcrypt.hashSync('12#rer', PASSWORD_SALT) },
        { email: 'knex@gmail.com', password: bcrypt.hashSync('knex3', PASSWORD_SALT) },
        { email: 'node@gmail.com', password: bcrypt.hashSync('node123', PASSWORD_SALT) }
      ])
    })
}
