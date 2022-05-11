const getBlogs = (req, res) => {
  res.status(200).json({ message: "Get Blogs " });
};

const createBlog = (req, res) => {
    res.status(200).json({ message: "Create Blogs " });
  };

  const updateBlog = (req, res) => {
    res.status(200).json({ message: `Update Blog ${req.params.id}` });
  };

  const deleteBlogs = (req, res) => {
    res.status(200).json({ message: `Delete Blog ${req.params.id}` });
  };

  






module.exports = {
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlogs
}