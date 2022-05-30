var express = require('express');
var router = express.Router();

const {getPublisher, addPublisher, deletePublisher, updatePublisher} = require ('../controllers/publisherController')

router.route('/')
  .get(getPublisher)
  .post(addPublisher)
router.route('/:id')
  .put(updatePublisher)
  .delete(deletePublisher)

module.exports = router;
