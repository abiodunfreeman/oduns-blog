const express = require('express');
const router = express.Router();

const {
  createPost,
  getPostJSON,
  getPostForm,
  viewSinglePost,
  deletePost,
} = require('../controllers/Post');

router.route('/').get(getPostJSON);
router.route('/:id').get(viewSinglePost);
router.route('/:id/delete').delete(deletePost).get(deletePost);
router.route('/create').get(getPostForm).post(createPost);

module.exports = router;
