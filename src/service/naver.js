/* eslint-disable camelcase */
class Naver {
  constructor (fastify) {
    this.model = fastify.knex('naver')
    this.fastify = fastify
  }

  /*
   * ajudadores
   */

  reduceNaverProjeto (items, id_naver) {
    const naversProjetos = []
    items.forEach(id_projeto => {
      naversProjetos.push({
        id_projeto,
        id_naver
      })
    })
    return naversProjetos
  }

  /*
   * obter todos projetos
   * de um determina usuario
   */
  async fetchAllById (id) {
    const result = await this.model.select('id', 'name', ' birthdate', 'admission_date', 'job_role').where({
      id_user: id
    })
    return result
  }

  /*
   * criar projeto
   * de um determina usuario
   */
  // eslint-disable-next-line camelcase
  async create (name, birthdate, admission_date, job_role, projects, id_user) {
    const naver = await this.model.returning(['id', 'name', 'birthdate', 'admission_date', 'job_role']).insert({
      name,
      birthdate,
      admission_date,
      job_role,
      id_user
    })

    if (projects.length > 0) {
      const naverProjeto = await this.reduceNaverProjeto(projects, naver[0].id)
      const insertNaverProjeto = await this.fastify.knex('naver_projeto').insert(naverProjeto)
    }

    const projeto = await this.fetchSingleNaverAndAllProject(naver[0].id)
    const resultNaver = naver[0]
    resultNaver.projects = projeto

    return resultNaver
  }

  /*
   * obeter os projetos
   * projetos de um naver
   */

  async fetchSingleNaverAndAllProject (naver_id) {
    const result = await this.fastify.knex.select(['projeto.id', 'projeto.name'])
      .table('naver_projeto')
      .innerJoin('naver', 'naver.id', 'naver_projeto.id_naver').where('naver.id', naver_id)
      .innerJoin('projeto', 'projeto.id', 'naver_projeto.id_projeto')

    return result
  }

  /*
   * obeter um naver e os
   * projetos na qual
   * na qual participa
   */

  async fetchNaverById (id_user, id) {
    const naver = await this.model.select('id', 'name', ' birthdate', 'admission_date', 'job_role').where({
      id_user,
      id
    })

    const projeto = await this.fetchSingleNaverAndAllProject(naver[0].id)
    const resultNaver = naver[0]
    resultNaver.projects = projeto

    return resultNaver
  }

  /*
   * deletar projeto
   * de um determina usuario
   */
  async delete (id_user, id_naver) {
    const naver = await this.model.select().where({
      'naver.id': id_naver,
      'naver.id_user': id_user
    }).del()
    return naver
  }
}

module.exports = Naver
