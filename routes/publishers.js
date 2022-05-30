var express = require('express');
var router = express.Router();

const {getPublisher, addPublisher, deletePublisher, updatePublisher} = require ('../controllers/publisherController')

router.route('/')
  .post(addPublisher)
router.route('/:id')
  .get(getPublisher)
  .put(updatePublisher)
  .delete(deletePublisher)

module.exports = router;
