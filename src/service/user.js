class User{

  constructor(fastify){
    this.jwt = fastify.jwt
    this.model = fastify.knex('user')
  }

  /*
  * criar novo usuario
  */

  async siginup(email,password){
    
    let result 

    try{
       await this.model.insert({
        email,
        password
      })
      result = true
    }catch(error){
       result = error
    }
    
    return result
  }

   /*
  * login usuário
  */

  async login(email,password){
    try{
      const result = await this.model.where({email,password})
      if(result.length>0){

        const {id, email} = result[0]
        const payload = {id, email}
        const token = this.jwt.sign(payload)
        return {id,email, token}

      }else{
        return {

          statusCode: 400,
          error: "erro do cliente",
          message: "usuário não encontrado"

        }
      }
    }catch(error){
      return error
    }
    
  }

  async fetch(){
    const user = await this.model
    
    return user
  }
}


module.exports = User