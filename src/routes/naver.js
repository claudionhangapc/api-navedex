/* eslint-disable camelcase */
const naver = require('../service/naver')

module.exports = function (fastify, option, done) {
  // eslint-disable-next-line new-cap
  const naverInstance = new naver(fastify)

  /*
   * obter todos naver
   */

  fastify.get('/', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      const {
        id
      } = request.whoiam
      const result = await naverInstance.fetchAllById(id)
      reply.send(result)
    } catch (error) {
      reply.send(error)
    }
  })

  /*
   * rota para mostra um naver
   * e projetos assossiados
   */

  fastify.get('/:id', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      const id_user = request.whoiam.id
      const id_naver = request.params.id
      const result = await naverInstance.fetchNaverById(id_user, id_naver)
      reply.send(result)
    } catch (error) {
      reply.send(error)
    }
  })

  /*
   * criar naver
   */

  fastify.post('/', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      const {
        name, birthdate,
        admission_date, job_role, projects
      } = request.body

      const { id } = request.whoiam

      const result = await naverInstance.create(name, birthdate, admission_date, job_role, projects, id)
      // request.whoiam
      reply.send(result)
    } catch (error) {
      reply.send(error)
    }
  })

  /*
   * rota para deletar
   * um naver
   */

  fastify.delete('/:id_naver', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      const { id } = request.whoiam
      // eslint-disable-next-line camelcase
      const { id_naver } = request.params
      const result = await naverInstance.delete(id, id_naver)
      reply.send(result)
    } catch (error) {
      reply.send(error)
    }
  })

  done()
}
