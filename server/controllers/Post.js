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
// @desc Displays Post Form
// @route GET /posts/create
// @access Public
exports.viewSinglePost = async (req, res, next) => {
  try {
    const singlePost = await Post.findById(req.params.id);
    res.status(200).json(singlePost);
  } catch (err) {
    console.log(`${err}`.red);
    res.status(400).json({ success: false, err: err.message });
  }
};
// @desc Displays Post Form
// @route Delete /posts/:id/delete
// @access Public
exports.deletePost = async (req, res, next) => {
  try {
    const deletePost = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, deletePost });
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
