const Book = require('../models/Book')

const getBook = async (req, res) => {
  try {
    const bookId = req.params.id
    const book = await Book.findOne(bookId)
    res.status(200).json({
      book
    })
  } catch(err) {
    res.status(500).json({
      message: err
    })
  }
}

const addBook = async (req, res) => {
  try {
    const {title, description, date, author, publisher} = req.body
    const book = await Book.create({
    title, description, date, author, publisher
    })
    res.status(200).json({
      book
    })
  } catch(err) {
    res.status(500).json({
      message: err
    })
  } 
}

const updateBook = async (req, res) => {
  try {
    const {title, description, date, author, publisher} = req.body
    const bookId = req.params.id
    const book = await Book.findOneAndUpdate({bookId},{
      title, description, date, author, publisher
    })
    res.status(200).json({
      book
    })
  } catch(err) {
    res.status(500).json({
      message: err
    })
  }
}

const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id
    const book = await Book.findOneAndDelete(bookId)
    res.status(200).json({
      book
    })
  } catch(err) {
    res.status(404).json({
      message: "book not found"
    })   
  }
}

module.exports = {
  getBook,
  addBook,
  updateBook,
  deleteBook
}