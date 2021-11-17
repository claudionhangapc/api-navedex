const naver = require('../service/naver')


module.exports  = function(fastify, option, done){

  const naverInstance = new naver(fastify)

  /*
  * rota para obter todos naver
  */

  fastify.get('/',
  {
    preValidation: [fastify.authenticate]
  },
  async (request, reply)=>{

    try{
      const {id} = request.whoiam
      const result = await naverInstance.fetchAllById(id)
      reply.send(result)
    }catch(error){
      reply.send(error)
    }
  })

  done()
}