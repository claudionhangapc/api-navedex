const fastifyPlugin = require('fastify-plugin')
const { readFileSync } = require('fs')
const path = require('path')

async function auth (fastify, options) {
  /*
  * registra as chaves
  * do certificado
  */

  fastify.register(require('fastify-jwt'), {
    secret: {
      private: readFileSync(`${path.join(__dirname, 'certs')}/private.key`, 'utf8'),
      public: readFileSync(`${path.join(__dirname, 'certs')}/public.key`, 'utf8')
    },
    sign: { algorithm: 'RS256' }
  })

  /*
  * adicionando o authenticate
  * func no decorador
  */

  fastify.decorate('authenticate', async function (request, response) {
    try {
      const whoiam = await request.jwtVerify()
      request.whoiam = whoiam
    } catch (err) {
      response.send(err)
    }
  })
}

module.exports = fastifyPlugin(auth)
