class Projeto{
  constructor(fastify){
    this.model = fastify.knex('projeto')
  }

  /*
  * obter todos projetos
  * de um determina usuario
  */
  async fetch(id){
    const result = await this.model.where({id_user:id})
    return result
  }

  /*
  * criar projeto
  * de um determina usuario
  */
  async create(name, id_user){

    try{
      const result =  await this.model.insert({
        name,
        id_user
      })
      return result
    }catch(error){
      return error
    }
    
  }
}

module.exports = Projeto
