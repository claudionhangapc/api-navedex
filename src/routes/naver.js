const naver = require('../service/naver')

module.exports = function (fastify, option, done) {
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
   * obter um unico naver
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
        name
      } = request.body
      const {
        birthdate
      } = request.body
      const {
        admission_date
      } = request.body
      const {
        job_role
      } = request.body
      const {
        projects
      } = request.body
      const {
        id
      } = request.whoiam

      const result = await naverInstance.create(name, birthdate, admission_date, job_role, projects, id)
      // request.whoiam
      reply.send(result)
    } catch (error) {
      reply.send(error)
    }
  })

  done()
}
