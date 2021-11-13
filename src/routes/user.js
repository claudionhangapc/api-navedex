const user = require('../service/user')


module.exports  = function(fastify, option, done){

  const userInstance = new user(fastify)

  /*
  * rota para obter usuario
  */

  fastify.post('/signup',async (request, reply)=>{
    
    const {email, password} = request.body
    const result = await userInstance.siginup(email,password)
    reply.send(result)

  })

  done()
}