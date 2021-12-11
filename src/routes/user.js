const user = require('../service/user')
const schema = require('../schema/user')
module.exports = function (fastify, option, done) {
  const userInstance = new user(fastify)

  /*
   * rota para cadastrar usuario
   */

  fastify.post('/signup', { schema: schema.userSign },
    async (request, reply) => {
      const {
        email,
        password
      } = request.body
      const result = await userInstance.siginup(email, password)
      reply.send(result)
    })

  /*
   * fazer login
   */

  fastify.post('/login', {
    schema: schema.userLogin
  }, async (request, reply) => {
    const {
      email,
      password
    } = request.body

    const result = await userInstance.login(email, password)

    reply.send(result)
  })

  done()
}
