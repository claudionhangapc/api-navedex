require('dotenv').config({
  path: './'
})
const server = require("./src/app")

const port = process.env.Port || 3000

const start = async () => {
  try {
    await server.listen(port)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()