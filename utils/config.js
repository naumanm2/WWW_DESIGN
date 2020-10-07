require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI
const API_KEY = process.env.API_KEY
const PORT = process.env.PORT

module.exports = {
  MONGODB_URI,
  PORT,
  API_KEY
}
