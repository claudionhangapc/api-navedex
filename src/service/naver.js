class  Naver{
  constructor(fastify){
    this.model = fastify.knex('naver')
    this.fastify = fastify
  }

  /*
  * metodos ajudadores 
  */

   /*
  * metodos ajudadores 
  */

   reduceNaverProjeto(items,id_projeto){
    const naversProjetos = []
    items.forEach(id_naver=> {
      naversProjetos.push({
        id_projeto,
        id_naver,
      })
    });
    return naversProjetos 
  }


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
 async create(name,birthdate,admission_date,job_role, projects,id_user){

  const naver =  await this.model.returning(['id','name','birthdate','admission_date','job_role']).insert({
    name,
    birthdate,
    admission_date,
    job_role, 
    id_user
  })

  if(this.reduceNaverProjeto(projects,naver[0].id)){ 
    //this.fastify.knex('naver_projeto').insert(naverProjeto)
  }

  const result = await this.fastify.knex.select(['naver.name'])
  .table('naver_projeto')
  .innerJoin('naver','naver.id','naver_projeto.id_naver').where('naver.id',8)
  .innerJoin('projeto','projeto.id','naver_projeto.id_projeto')

  return result
 }
 
}

module.exports = Naver