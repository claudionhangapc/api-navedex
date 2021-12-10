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

  /*
   * obter todos projetos
   * e navers associados
   */
  async show (id_user, id_projeto) {
    let result = await this.model.select(' naver.* ', ' projeto.id as projeto_id ', ' projeto.name as projeto_name').where({
      'projeto.id': id_projeto,
      'projeto.id_user': id_user
    })
      .innerJoin('naver_projeto', 'projeto.id', 'naver_projeto.id_projeto')
      .innerJoin('naver', 'naver.id', 'naver_projeto.id_naver')

    if (result.length > 0) {
      const projeto = {}
      projeto.id = result[0].projeto_id
      projeto.name = result[0].projeto_name

      projeto.navers = result.map(function (item) {
        delete item.projeto_name
        delete item.projeto_id
        return item
      })

      result = projeto
    }
    return result
  }

  /*
   * deletar projeto
   * de um determina usuario
   */
  async delete (id_user, id_projeto) {
    const projeto = await this.model.select().where({
      'projeto.id': id_projeto,
      'projeto.id_user': id_user
    }).del()
    return projeto
  }
}

module.exports = Projeto
