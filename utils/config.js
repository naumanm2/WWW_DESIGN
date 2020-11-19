require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI
const API_KEY = process.env.API_KEY
const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

module.exports = {
  MONGODB_URI,
  PORT,
  API_KEY,
  NODE_ENV
}
