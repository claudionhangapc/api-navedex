const projeto = require('../service/projeto')


module.exports  = function(fastify, option, done){

  const projetoInstance = new projeto(fastify)

  /*
  * rota para obter todos projetos
  */

  fastify.get('/',
  {
    preValidation: [fastify.authenticate]
  },
  async (request, reply)=>{

    const {id} = request.whoiam
    const result = await projetoInstance.fetch(id)
    //request.whoiam
    reply.send(result)
  })

  /*
  * rota para criar projeto
  */

  fastify.post('/',
  {
    preValidation: [fastify.authenticate]
  },
  async (request, reply)=>{
    const {name} = request.body
    const {id} = request.whoiam

    const result = await projetoInstance.create(name,id)
    //request.whoiam
    reply.send(result)
  })

  

  done()
}