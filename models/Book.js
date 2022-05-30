const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  publication_date: Date,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  publisher: {
    type: Schema.Types.ObjectId,
    ref: 'Publisher'
  }
})

module.exports = mongoose.model('Book', bookSchema);