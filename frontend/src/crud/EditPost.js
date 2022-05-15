import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Blog from "../components/Blog";

const EditPost = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [blogValues, setBlogValues] = useState({
    title: "",
    author: "",
    content: "",
  });

  const handleChange = (e) => {
    const post = {
      ...blogValues,
      [e.target.name]: e.target.value,
    };
    setBlogValues(post);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/posts/${id}`, blogValues);
    navigate("/");
  };

  useEffect(() => {
    const getPostID = async () => {
      let postResults = await axios.get(`/posts/${id}`);
      setBlogValues(postResults.data);
    };
    getPostID();
  }, [id]);

  return (
    <div className="Edit">
      <Link to="/feed">See Your Post</Link>

      <main>
        <Blog
          formValues={blogValues}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </main>
    </div>
  );
};

export default EditPost;
