import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Blog from '../components/Blog'

const EditPost = () => {
  let { id } = useParams()
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    title: '',
    author: '',
    content: ''
  })

  const handleChange = (e) => {
    const post = {
      ...formValues,
      [e.target.name]: e.target.value
    }
    setFormValues(post)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`/posts/${id}`, formValues)
    navigate('/')
  }

  useEffect(() => {
    const getPostID = async () => {
      let postResults = await axios.get(`/posts/${id}`)
      setFormValues(postResults.data)
    }
    getPostID()
  }, [id])

  return (
    <div className="Edit">
      <aside>
        <h1>side bar.</h1>
        <form id="Edit-Search">
          <input placeholder="Search"></input>
        </form>
        <Link to="/">Home</Link>
      </aside>
      <main>
        <Form
          formValues={formValues}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </main>
    </div>
  )
}

export default EditPost