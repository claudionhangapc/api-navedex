const projeto = require('../service/projeto')

module.exports = function (fastify, option, done) {
  // eslint-disable-next-line new-cap
  const projetoInstance = new projeto(fastify)

  /*
   * rota para obter todos projetos
   */

  fastify.get('/', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      const { id } = request.whoiam
      const result = await projetoInstance.fetch(id)
      reply.send(result)
    } catch (error) {
      reply.send(error)
    }
  })

  /*
   * rota para criar projeto
   */

  fastify.post('/', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      const { name } = request.body
      const { id } = request.whoiam

      const projeto = await projetoInstance.create(name, id)
      reply.send(projeto)
    } catch (error) {
      reply.send(error)
    }
  })

  /*
   * rota para mostra projetos
   * e naver assossiados
   */

  fastify.get('/:id_projeto', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      const { id } = request.whoiam
      // eslint-disable-next-line camelcase
      const { id_projeto } = request.params
      const result = await projetoInstance.show(id, id_projeto)
      reply.send(result)
    } catch (error) {
      reply.send(error)
    }
  })

  /*
   * rota para deletar
   * um projeto
   */

  fastify.delete('/:id_projeto', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      const { id } = request.whoiam
      // eslint-disable-next-line camelcase
      const { id_projeto } = request.params
      const result = await projetoInstance.delete(id, id_projeto)
      reply.send(result)
    } catch (error) {
      reply.send(error)
    }
  })

  done()
}
