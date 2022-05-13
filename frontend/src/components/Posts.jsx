

const Post =  ({ Post,text, saveText }) => {
    return(
        <div className="postContainer">
    <h2>Create A Post</h2>
    <form onSubmit={createPost} className='postBox'>
      <textarea type='text' placeholder="Post away!" value={text} onChange={saveText} cols='100' rows='5' required/>
      <button className="postButton">Post</button>
    </form>
  </div>
    )
}

export default Post