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
  async fetchAllById (id_user) {
    const result = await this.fastify.knex.select('id', 'name', ' birthdate', 'admission_date', 'job_role').from('naver').where({
      id_user: id_user
    })
    return result
  }

  /*
   * criar projeto
   * de um determina usuario
   */

  async update (name, birthdate, admission_date, job_role, projects, id_user, id_naver) {
    let naver
    if (projects.length > 0) {
      const projeto_result = await this.fastify.knex.select('id')
        .from('projeto')
        .whereIn('id', projects)
      // eslint-disable-next-line no-undef
      if ((projeto_result.length === projects.length)) {
        naver = await this.model.returning(['id', 'name', 'birthdate', 'admission_date', 'job_role']).update({
          name,
          birthdate,
          admission_date,
          job_role,
          id_user
        }).where({
          'naver.id': id_naver,
          'naver.id_user': id_user
        })

        await this.fastify.knex('naver_projeto').where('naver_projeto.id_naver', id_naver).del()
        const navers_projetos = this.reduceNaverProjeto(projects, naver[0].id)
        const navers_projetos_result = await this.fastify.knex('naver_projeto').returning(['id_projeto']).insert(navers_projetos)

        naver[0].projects = navers_projetos_result.map(projeto => projeto.id_projeto)
      } else {
        naver = []
        naver[0] = {
          messageError: 'error'
        }
      }
    } else {
      await this.fastify.knex('naver_projeto').where('naver_projeto.id_naver', id_naver)
        .del()
      naver = await this.model.returning(['id', 'name', 'birthdate', 'admission_date', 'job_role']).update({
        name,
        birthdate,
        admission_date,
        job_role,
        id_user
      }).where({
        'naver.id': id_naver,
        'naver.id_user': id_user
      })

      naver[0].projects = []
    }

    return naver[0]
  }

  /*
   * criar projeto
   * de um determina usuario
   */

  async create (name, birthdate, admission_date, job_role, projects, id_user) {
    let naver
    if (projects.length > 0) {
      const projeto_result = await this.fastify.knex.select('id')
        .from('projeto')
        .whereIn('id', projects)
      // eslint-disable-next-line no-undef
      if ((projeto_result.length === projects.length)) {
        naver = await this.model.returning(['id', 'name', 'birthdate', 'admission_date', 'job_role']).insert({
          name,
          birthdate,
          admission_date,
          job_role,
          id_user
        })
        const navers_projetos = this.reduceNaverProjeto(projects, naver[0].id)
        const navers_projetos_result = await this.fastify.knex('naver_projeto').returning(['id_projeto']).insert(navers_projetos)

        naver[0].projects = navers_projetos_result.map(projeto => projeto.id_projeto)
      } else {
        naver = []
        naver[0] = {
          messageError: 'error'
        }
      }
    } else {
      naver = await this.model.returning(['id', 'name', 'birthdate', 'admission_date', 'job_role']).insert({
        name,
        birthdate,
        admission_date,
        job_role,
        id_user
      })

      naver[0].projects = []
    }

    return naver[0]
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

  async fetchNaverById (id_user, id_naver) {
    const naver = await this.fastify.knex.select('id', 'name', ' birthdate', 'admission_date', 'job_role').from('naver').where({
      id_user: id_user,
      id: id_naver
    })

    const projeto = await this.fetchSingleNaverAndAllProject(naver[0].id)
    const resultNaver = naver[0]
    resultNaver.projects = projeto

    return naver
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
