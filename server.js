const express = require('express')
const app = express()

const routes = require('./routes')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')


const PORT = process.env.PORT || 5000

app.use(express.json())


app.use(middleware.requestLogger)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`)
})
