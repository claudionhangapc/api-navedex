const fastifyPlugin = require("fastify-plugin")


async function auth(fastify,options){
  fastify.decorate('authenticate', async function(request, response){
    try{
      const whoiam = await request.jwtVerify()
      request.whoiam  = whoiam
    }catch(err){
      response.send(err)
    }
  })
}

module.exports =  fastifyPlugin(auth)