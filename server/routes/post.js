const express = require('express');
const router = express.Router();

const { createPost, getPostJSON, getPostForm } = require('../controllers/Post');

router.route('/').get(getPostJSON);
router.route('/create').get(getPostForm).post(createPost);

module.exports = router;
