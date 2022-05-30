const mongoose = require('mongoose')

const connection = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.0vnvp.mongodb.net/projet1-8?retryWrites=true&w=majority',{
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    console.log('connected to database !')

  } catch(err) {
    console.log(err.message)
  }
}

module.exports = connection