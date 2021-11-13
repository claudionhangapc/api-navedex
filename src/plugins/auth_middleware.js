const fastifyPlugin = require("fastify-plugin")


async function auth(fastify,options){
  fastify.decorate('authenticate', async function(request, response){
    try{
      await request.jwtVerify()
    }catch(err){
      response.send(err)
    }
  })
}

module.exports =  fastifyPlugin(auth)