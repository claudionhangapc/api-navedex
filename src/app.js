const app =  require('fastify')({
  logger: true
})

app.get('/', async(request, reply)=>{
  return {
    hello:'olla'
  }
})

module.exports = app;