const Book = require('../models/Book')

const getBooks = async (req, res) => {
  try {
    const books = await Book.find()
    res.status(200).json({
      books
    })
  } catch(err) {
    res.status(500).json({
      message: err
    })
  }
}

const getBook = async (req, res) => {
  try {
    const bookId = req.params.id
    const book = await Book.findById(bookId)
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
    const {title, description, publication_date, author, publisher} = req.body
    const book = await Book.create({
    title, description, publication_date, author, publisher
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
    const {title, description, publication_date, author, publisher} = req.body
    const bookId = req.params.id
    const book = await Book.findOneAndUpdate({bookId},{
      title, description, publication_date, author, publisher
    })
    const updatedBook = await book.save()
    res.status(200).json({
      updatedBook
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
  getBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook
}