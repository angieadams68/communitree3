


const getBlogs = (req, res) => {
  res.status(200).json({ message: "Get Blogs " });
};

const createBlog = (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error("Please add text field")
  };
  res.status(200).json({ message: "Create Blog "})
}

  const updateBlog = (req, res) => {
    res.status(200).json({ message: `Update Blog ${req.params.id}` });
  };

  const deleteBlog = (req, res) => {
    res.status(200).json({ message: `Delete Blog ${req.params.id}` });
  };

  






module.exports = {
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlog
}