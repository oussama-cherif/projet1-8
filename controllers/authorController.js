const Author = require('../models/Author')

const getAuthor = async (req, res) => {
  try {
    const authorId = req.params.id
    const author = await Author.findOne(authorId)
    res.status(200).json({
      author
    })
  } catch(err) {
    res.status(500).json({
      message: err
    })
  }
}

const addAuthor = async (req, res) => {
  try {
    const {firstName, lastName, age} = req.body
    const author = await Author.create({
    firstName, lastName, age
    })
    res.status(200).json({
      author
    })
  } catch(err) {
    res.status(500).json({
      message: err
    })
  } 
}

const updateAuthor = async (req, res) => {
  try {
    const {firstName, lastName, age} = req.body
    const authorId = req.params.id
    const author = await Author.findOneAndUpdate({authorId},{
      firstName, lastName, age
    })
    res.status(200).json({
      author
    })
  } catch(err) {
    res.status(500).json({
      message: err
    })
  }
}

const deleteAuthor = async (req, res) => {
  try {
    const authorId = req.params.id
    const author = await Author.findOneAndDelete(authorId)
    res.status(200).json({
      author
    })
  } catch(err) {
    res.status(404).json({
      message: "Author not found"
    })   
  }
}

module.exports = {
  getAuthor,
  addAuthor,
  updateAuthor,
  deleteAuthor
}