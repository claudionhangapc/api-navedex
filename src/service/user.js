class User{

  constructor(fastify){
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
  * login uaurario
  */

  async login(email,password){
    let result
    try{
      result = await this.model.where({email,password}).first()
    }catch(error){
      result = error
    }
    return result 
  }

  async fetch(){
    const user = await this.model
    
    return user
  }
}


module.exports = User