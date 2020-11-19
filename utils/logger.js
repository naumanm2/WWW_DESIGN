//helper to log errors and information into console.

module.exports = {
  error: (...params) => {
    console.error(...params)
  },
  info: (...params) => {
    console.log(...params)
  }
}
