import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Blog from "../components/Blog";

const Feed = () => {
  const [blogs, setBlogs] = useState();

  const getBlogs = async () => {
    const res = await axios.get("http://localhost:3001/api/allblogs");
    setBlogs(res.data);
    console.log(res.data);
  };

  const postBlog = async () => {
    await axios({
      url: `http://localhost:3001/api/new`, 
      method: 'post',
      data: {blogEntry}
    })
  }



  useEffect(() => {
    getBlogs();
  }, []);

  const [blogEntry, setBlogEntry] = useState({
    title: "",
    author: "62853d70aa04fe015a2f88b6",
    content: "",
  });
  const handleChange = (e) => {
    setBlogEntry({ ...blogEntry, [e.target.name]: e.target.value });
  };

  const handleSumbit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="Home">
      <main>
        {blogs &&
          blogs.map((blog) => (
            <div key={blog._id}>
              <h2>{blog.title}</h2>
              <h4>Author: {blog.author}</h4>
              <p>{blog.content}</p>
            </div>
          ))}
        <div>
          <form 
          onSubmit={() => {}}
          >
            <input
              onChange={handleChange}
              name="title"
              type="text"
              placeholder="title"
              value={blogEntry.title}
            />
            <textarea
              onChange={handleChange}
              name="content"
              type="text"
              placeholder="content"
              value={blogEntry.content}
            />
          </form>
          <div>
            <button type="submit"> Submit </button>
            <button type="reset" > Clear </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Feed;
