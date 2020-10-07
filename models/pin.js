const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  exhibitionStart: {
    type: String
  },
  exhibitionEnd: {
    type: String
  },
  openingHour: {
    type: String
  },
  closingHour: {
    type: String
  },
  address: {
    type: String
  },
  keywords: [
    { type: String }
  ],
  fees: [
    { type: Number }
  ],
  picture: {
    type: String
  },
  link: {
    type: String
  },
  description: {
    type: String
  },
  museocard: {
    type: Boolean,
    required: true
  },
})

module.exports = mongoose.model('Pin', schema)
