const app =  require('fastify')({
  logger: true
})


/*
* registrar os plugis 
*/
app.register(require('fastify-jwt'), {
  secret: 'minhaChaveSecreta'
})

app.register(require('./plugins/auth_middleware'))

require('./plugins/conection')(app)


/*
* registrar as rotas
*/

app.register(require('./routes/user'),{ prefix: '/user' })
app.register(require('./routes/projeto'),{ prefix: '/projeto' })


module.exports = app;