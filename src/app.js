const app =  require('fastify')({
  logger: true
})

app.get('/', async(request, reply)=>{
  return {
    hello:'olla'
  }
})

console.log(__dirname)
module.exports = app;