var express = require('express');
var router = express.Router();

const {getAuthor, addAuthor, deleteAuthor, updateAuthor} = require ('../controllers/authorController')

router.route('/')
  .get(getAuthor)
  .post(addAuthor)
router.route('/:id')
  .put(updateAuthor)
  .delete(deleteAuthor)

module.exports = router;
