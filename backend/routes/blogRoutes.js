const express = require("express");
const router = express.Router();
const {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

const {protect} = require('../middleware/authMiddleware')

router.route("/").get(protect, getBlogs).post(protect, createBlog);
router.route("/:id").delete(protect, deleteBlog).put(protect, updateBlog);

module.exports = router;
