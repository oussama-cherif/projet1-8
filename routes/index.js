var express = require('express');
var router = express.Router();

const {getBook, addBook, deleteBook, updateBook} = require ('../controllers/bookController')

/* GET home page. */
router.route('/')
  .get(getBook)
  .post(addBook)
router.route('/:id')
  .put(updateBook)
  .delete(deleteBook)


module.exports = router;
