var express = require('express');
var router = express.Router();

const {getAuthor, addAuthor, deleteAuthor, updateAuthor} = require ('../controllers/authorController')

router.route('/')
  .post(addAuthor)
router.route('/:id')
  .get(getAuthor)
  .put(updateAuthor)
  .delete(deleteAuthor)

module.exports = router;
