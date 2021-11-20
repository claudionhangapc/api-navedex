const app =  require('fastify')({
  logger: true
})


/*
* registrar os plugis 
*/

app.register(require('./plugins/jwt/auth_middleware'))

require('./plugins/conection')(app)


/*
* registrar as rotas
*/
app.register(require('./routes/ping'),{ prefix: '/ping' })
app.register(require('./routes/user'),{ prefix: '/users' })
app.register(require('./routes/projeto'),{ prefix: '/projetos' })
app.register(require('./routes/naver'),{ prefix: '/navers' })


module.exports = app;