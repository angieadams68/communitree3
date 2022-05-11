const express = require('express')
const router = express.Router()
const { getGoals } = require('../controllers/blogController')

router.get("/", (req, res) => {
    res.status(200).json({ message: "Get Blogs" });
  });

  router.post("/", (req, res) => {
    res.status(200).json({ message: "Create Blog" });
  });

  router.put("/:id", (req, res) => {
    res.status(200).json({ message: `Update Blog ${req.params.id}` });
  });

  router.delete("/:id", (req, res) => {
    res.status(200).json({ message: `Delete Blog ${req.params.id}` });
  });









module.exports = router
