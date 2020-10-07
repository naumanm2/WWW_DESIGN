const Pin = require('../models/pin')

module.exports = {
  getAll: async (request, response) => {
    const pins = await Pin.find({})
    return response.json(pins)
  },
  findById: async (request, response) => {
    const pin = await Pin.findById({request.params.id})
    return response.json(pin)
  },
  update: async (request, response) => {
    const pin = await Pin.findOneAndUpdate({ _id: request.params.id }, request.body)
    return response.json(pin)
  },
  remove: async (request,response) => {
    const pin = await Pin.findById({ _id: request.params.id })
    return response.json(pin)
  },
  create: async (request, response) => {
    const pin = new Pin({...request.body})
    const result = await pin.save()
    return response.json(result)
  },


}

module.exports = pinRouter
