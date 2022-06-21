const Post = require('../models/Post');

// @desc Get all Post in JSON
// @route GET /posts
// @access Public
exports.getPostJSON = async (req, res, next) => {
  try {
    const allPost = await Post.find();
    res.status(200).json(allPost);
  } catch (err) {
    console.log(`${err}`.red);
    res.status(400).json({ success: false, err: err.message });
  }
};
// @desc Create a new post
// @route POST /posts/create
// @access Public
exports.createPost = async (req, res, next) => {
  try {
    console.log(req.body);
    const newPost = await Post.create(req.body);
    res.status(200).json({ success: true, newPost });
  } catch (err) {
    console.log(`${err}`.red);
    res.status(400).json({ success: false, err: err.message });
  }
};
// @desc Displays Post Form
// @route GET /posts/create
// @access Public
exports.getPostForm = (req, res, next) => {
  try {
    res.status(200).render('postForm');
  } catch (err) {
    console.log(`${err}`.red);
    res.status(400).json({ success: false, err: err.message });
  }
};
