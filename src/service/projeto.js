class Projeto {
  constructor (fastify) {
    this.model = fastify.knex('projeto')
    this.fastify = fastify
  }

  /*
   * metodos ajudadores
   */

  reduceNaverProjeto (items, id_projeto) {
    const naversProjetos = []
    items.forEach(id_naver => {
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
  async fetch (id) {
    const result = await this.model.select('id', 'name').where({
      id_user: id
    })
    return result
  }

  /*
   * criar projeto
   * de um determina usuario
   */
  async create (name, navers, id_user) {
    const projeto = await this.model.returning(['id', 'name']).insert({
      name,
      id_user
    })

    if (navers.length > 0) {
      const valuesNaverProjeto = this.reduceNaverProjeto(navers, id_user)
      /* const naverProjeto = this.fastify.knex('naver_projeto').insert( valuesNaverProjeto) */
      return valuesNaverProjeto
    }

    return navers.length
  }
}

module.exports = Projeto
