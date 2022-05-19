import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Blog from "../components/Blog";

const Feed = () => {
  const [blogs, setBlogs] = useState();
  const [edit, setEdit] = useState(false);
  const [targetEntry, setTargetEntry] = useState();
  const [change, setChange] = useState(false)
  const [comments, setComments] = useState()
  const [target, setTarget] = useState()



  const getBlogs = async () => {
    const res = await axios.get("http://localhost:3001/api/allblogs");
    setBlogs(res.data);
    console.log(res.data);
  };

  const getComments = async () => {
    const res = await axios.get(`http://localhost:3001/api/comments/${target}`);
    setComments(res.data);
    console.log(res.data);
  };


  useEffect(() => {
    getBlogs();
  }, []);
  useEffect(() => {
    getBlogs();
    setChange(false)
  }, [change]);
  useEffect(() => {
    getComments();
  }, [target]);

  const [blogEntry, setBlogEntry] = useState({
    title: "",
    author: "62853d70aa04fe015a2f88b6",
    content: "",
  });
  const handleChange = (e) => {
    if (edit) {
      setBlogEntry({ ...targetEntry, [e.target.name]: e.target.value });
    } else {
      setBlogEntry({ ...blogEntry, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (edit) {
      let id = targetEntry._id;
      const res = await axios.put(`http://localhost:3001/api/posts/${id}`, {
        title: blogEntry.title,
        content: blogEntry.content,
        author: "62853d70aa04fe015a2f88b6",
      });
    } else if (!edit) {
      let blog = await axios.post(`http://localhost:3001/api/new`, {
        title: blogEntry.title,
        content: blogEntry.content,
        author: "62853d70aa04fe015a2f88b6",
      });
    }
    setEdit(false)
    setChange(true) 
    setBlogEntry({
      title: "",
      author: "62853d70aa04fe015a2f88b6",
      content: "",
    });
  };

  const handleClear = () => {
    setBlogEntry({
      title: "",
      author: "62853d70aa04fe015a2f88b6",
      content: "",
    });
  };

  const deleteEntry = async (post) => {
    await axios.delete(`http://localhost:3001/api/delete/posts/${post}`);
    setChange(true)
  };

  return (
    <div className="Home">
      <main>
        {blogs &&
          blogs.map((blog) => (
            <div className="boxform" key={blog._id}>
              <h4>
                {blog.title}{" "}
                <button onClick={() => deleteEntry(blog._id)}> x </button>{" "}
              </h4>
              <button onClick={() => {
                setEdit(true)
                setTargetEntry(blog)}}> Edit </button>
              <p>{blog.content}</p>
              <div className="comments">
                <button onClick={()=> setTarget(blog._id)}> Get Comments </button>
                {
                  target && comments && comments.map((comment)=>(
                    <div className="commentItem" key={comment._id}> 
                    <h5> {comment.user} </h5>
                    <p> {comment.text} </p>
                    
                     </div>
                  ))
                }
              <div>
          <h2> Comment Entry </h2>
          <form onSubmit={() => {}}>
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
        </div>
        <div className="commentbox">

        </div>

              </div>
            </div>
          ))}
        <div>
          <h2> Blog Form </h2>
          <form onSubmit={() => {}}>
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
            <button type="submit" onClick={(e) => handleSubmit(e)}>
              {" "}
              Submit{" "}
            </button>
            <button type="reset" onClick={() => handleClear()}>
              {" "}
              Clear{" "}
            </button>
          </div>
        </div>
        
      </main>
    </div>
  );
};

export default Feed;
