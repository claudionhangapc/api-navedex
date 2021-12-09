/* eslint-disable camelcase */
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
  async create (name, id_user) {
    const projeto = await this.model.returning(['id', 'name']).insert({
      name,
      id_user
    })
    return projeto[0]
  }
}

module.exports = Projeto
