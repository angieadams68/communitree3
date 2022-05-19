import axios from "axios";
import { useEffect, useState } from "react";


const Feed = () => {
  const [blogs, setBlogs] = useState();
  const [edit, setEdit] = useState(false);
  const [targetEntry, setTargetEntry] = useState();
  const [change, setChange] = useState(false);
  const [comment, setComment] = useState({
    user: "",
    text: "",
  });
  const [target, setTarget] = useState();
  const [commentOpen, setCommentOpen] = useState(false);

  const postComment = async () => {
    await axios.post(`http://localhost:3001/api/new/comment/${target}`, {
      user: comment.user,
      text: comment.text,
    });
    setChange(true);
    setCommentOpen(false);
  };

  const getBlogs = async () => {
    const res = await axios.get("http://localhost:3001/api/allblogs");
    setBlogs(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    getBlogs();
  }, []);
  useEffect(() => {
    getBlogs();
    setChange(false);
  }, [change]);

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

  const handleComment = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
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
    setEdit(false);
    setChange(true);
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
  const handleCommentClear = () => {
    setBlogEntry({
      user: "",
      text: "",
    });
  };

  const deleteEntry = async (post) => {
    await axios.delete(`http://localhost:3001/api/delete/posts/${post}`);
    setChange(true);
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
              <button
                onClick={() => {
                  setEdit(true);
                  setTargetEntry(blog);
                }}
              >
                {" "}
                Edit{" "}
              </button>
              <button
                onClick={() => {
                  setTarget(blog._id);
                  setCommentOpen(true);
                }}
              >
                {" "}
                Enter a Comment{" "}
              </button>
              <p>{blog.content}</p>
              <div className="comments">
                {blogs &&
                  blog.comment.map((comment) => (
                    <div className="commentItem" key={comment._id}>
                      <h5> {comment.user} </h5>
                      <p> {comment.text} </p>
                    </div>
                  ))}

                <div className="commentbox"></div>
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
          {commentOpen ? (
            <div>
              <h2> Comment Entry </h2>
              <form onSubmit={() => {}}>
                <input
                  onChange={handleComment}
                  name="user"
                  type="text"
                  placeholder="user"
                  value={comment.user}
                />
                <textarea
                  onChange={handleComment}
                  name="text"
                  type="text"
                  placeholder="text"
                  value={comment.text}
                />
              </form>
              <button type="submit" onClick={(e) => postComment(e)}>
                {" "}
                Enter Comment{" "}
              </button>
              <button type="reset" onClick={() => handleCommentClear()}>
                {" "}
                Clear{" "}
              </button>
            </div>
          ) : (
            <div> </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Feed;
