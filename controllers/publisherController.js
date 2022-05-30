const Publisher = require('../models/Publisher')

const getPublisher = async (req, res) => {
  try {
    const publisherId = req.params.id
    const publisher = await Publisher.findOne(publisherId)
    res.status(200).json({
      publisher
    })
  } catch(err) {
    res.status(500).json({
      message: err
    })
  }
}

const addPublisher = async (req, res) => {
  try {
    const {name, creation_date} = req.body
    const publisher = await Publisher.create({
      name, creation_date
    })
    res.status(200).json({
      publisher
    })
  } catch(err) {
    res.status(500).json({
      message: err
    })
  } 
}

const updatePublisher = async (req, res) => {
  try {
    const {name, creation_date} = req.body
    const publisherId = req.params.id
    const publisher = await Publisher.findOneAndUpdate({publisherId},{
      name, creation_date
    })
    res.status(200).json({
      publisher
    })
  } catch(err) {
    res.status(500).json({
      message: err
    })
  }
}

const deletePublisher = async (req, res) => {
  try {
    const publisherId = req.params.id
    const publisher = await Publisher.findOneAndDelete(publisherId)
    res.status(200).json({
      publisher
    })
  } catch(err) {
    res.status(404).json({
      message: "publisher not found"
    })   
  }
}

module.exports = {
  getPublisher,
  addPublisher,
  updatePublisher,
  deletePublisher
}