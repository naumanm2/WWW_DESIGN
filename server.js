const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Pin = require('./models/pin')
const initData = require('./data')

const routes = require('./routes')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const config = require('./utils/config')


const PORT = config.PORT || 5000

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => logger.info('connected to MongoDB'))
  .catch((error) => logger.error('error connecting to MongoDB', error.message))

app.use(express.json())
app.use(routes)

const init = async () => {
  await Pin.deleteMany({})
  await Pin.insertMany(initData.museums)
}
init()


app.use(middleware.requestLogger)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`)
})
