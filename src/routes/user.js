module.exports  = function(fastify, option, done){
  /*
  * rota para obter usuario
  */
  fastify.get('/signup',async (request, reply)=>{
    reply.send({
      hello: 'world'
    })
  })

  done()
}