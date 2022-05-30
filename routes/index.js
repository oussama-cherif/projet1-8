var express = require('express');
var router = express.Router();

const {getBook, addBook, deleteBook, updateBook, getBooks} = require ('../controllers/bookController')

/* GET home page. */
router.route('/')
  .get(getBooks)
  .post(addBook)
router.route('/:id')
  .get(getBook)
  .put(updateBook)
  .delete(deleteBook)


module.exports = router;
