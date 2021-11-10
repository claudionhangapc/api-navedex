
require('dotenv').config({path: './'})
const server = require("./src/app")

const knexfile = require("./knexfile")

console.log(knexfile.development)
const knex = require('knex')(knexfile.development)

const port = process.env.Port || 3000

const start = async ()=>{
  try{
    await server.listen(port)
  }catch(err){
    server.log.error(err)
    process.exit(1)
  }
}

start()