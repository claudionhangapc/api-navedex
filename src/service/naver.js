class  Naver{
  constructor(fastify){
    this.model = fastify.knex('naver')
    this.fastify = fastify
  }

  /*
  * metodos ajudadores 
  */


  /*
  * obter todos projetos
  * de um determina usuario
  */
  async fetchAllById(id){
    const result = await this.model.select('id','name',' birthdate','admission_date','job_role').where({id_user:id})
    return result
  }

  /*
  * criar projeto
  * de um determina usuario
  */
 
}

module.exports = Naver