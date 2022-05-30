const mongoose = require('mongoose')
const Schema = mongoose.Schema

const publisherSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  creation_date: Date
  
})

module.exports = mongoose.model('Publisher', publisherSchema);