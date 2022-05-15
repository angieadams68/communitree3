import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Article from '../components/Article'
import Blog from '../components/Blog'



const Feed = () => {
  const [blogPost, setBlogPost] = useState({
    title: '',
    author: '',
    content: ''
  })
  const [articles, setArticles] = useState([])
  const [clicked, toggleClick] = useState(false)
  let navigate = useNavigate()

  useEffect(() => {
    const renderArticles = async () => {
      let database = await axios.get('/allblogs')
      console.log(database)
      setArticles(database.data)
    }
    renderArticles()
  }, [])

  const createNew = (e) => {
    toggleClick(!clicked)
  }

  const saveContent = (e) => {
    const Blog = {
      ...blogPost,
      [e.target.name]: e.target.value
    }
    setBlogPost(Blog)
  }

  const submitPost = async (e) => {
    e.preventDefault()
    await axios.post('/new', blogPost)
    setBlogPost({
      title: '',
      author: '',
      content: ''
    })
    navigate('/post/your')
  }

  return (
    <div className="Home">
      
      <main>
        {!clicked ? (
          !!articles.length &&
          articles.map((article) => (
            <Article
              key={article._id}
              objectID={article._id}
              title={article.title}
              author={article.author}
              content={article.content}
            />
          ))
        ) : (
          <Blog
            blogPost={blogPost}
            saveContent={saveContent}
            submitPost={submitPost}
          />
        )}
      </main>
    </div>
  )
}

export default Feed