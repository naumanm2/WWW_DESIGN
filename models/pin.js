const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  MuseumName: {
    type: String,
    required: true
  }
  ExhibitionName: [
    { type: String }
  ],
  exhibitionDuration: [
    { type: String }
  ],
  openingHours: [
    { type: String }
  ],
  address: {
    type: String
  },
  lat: { type: mongoose.Decimal128 },
  lng: { type: mongoose.Decimal128 },
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
  description: [
  { type: String }
  ],
  museocard: {
    type: Boolean,
    required: true
  },
})

module.exports = mongoose.model('Pin', schema)
