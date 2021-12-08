
const fp = require('fastify-plugin')
const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile.development)

function conection (fastify) {
  fastify.decorate('knex', knex)
}

module.exports = conection
