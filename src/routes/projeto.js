//const projeto = require('../service/projeto')


module.exports  = function(fastify, option, done){

  //const projetoInstance = new user(fastify)

  /*
  * rota para obter todos projetos
  */

  fastify.get('/',
  {
    preValidation: [fastify.authenticate]
  },
  async (request, reply)=>{
    reply.send({texto:'ola'})
  })


  

  done()
}