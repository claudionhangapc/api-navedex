const app =  require('fastify')({
  logger: true
})

/*
* registrar os plugis 
*/

require('./plugins/conection')(app)



/*
* registrar as rotas
*/

app.get('/', async(request, reply)=>{
  return {
    hello:'olla'
  }
})

module.exports = app;