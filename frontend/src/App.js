import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import Blog from './components/Blog';
import YourPost from './crud/YourPost';
import EditPost from './crud/EditPost';
import DeletePost from './crud/DeletePost'
import About from "./pages/About"

function App() {
  return (
    <>
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register />} />
          <Route path="/post/your" element={<YourPost />} />
          <Route path="/edits/:id" element={<EditPost />} />
          <Route path="/confirm/delete" element={<DeletePost />} />
          
          

            </Routes>
    </div>
    </Router>
    </>
      
  );
}

export default App;
