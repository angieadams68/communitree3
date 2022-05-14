const Blog = ({ createBlog, text, saveText, photo, savePhoto }) => {
  return (
    <div className="Blog">
      <h1> Your Safe Place </h1>
      <form onSubmit={createBlog} className="postBox">
        <textarea
          type="text"
          placeholder="Begin Here"
          value={text}
          onChange={saveText}
          cols="100"
          rows="5"
          required
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={photo}
          onChange={savePhoto}
        />
        <button className="Op">Create Post</button>
        <button className="Op">Update Post</button>
        <button className="Op">Delete Post</button>
        <button className="Op">Post to Drafts</button>
      </form>
    </div>
  );
};

export default Blog;
