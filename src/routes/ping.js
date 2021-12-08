module.exports = function (fastify, option, done) {
  /*
   * ping
   */
  fastify.get('/', async (request, reply) => {
    reply.send({
      ping: 'pong'
    })
  })

  done()
}
