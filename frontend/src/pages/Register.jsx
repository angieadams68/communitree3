import React from 'react'
import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'



//////////// COMPONENT FUNCTION ////////////////

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        password2: '',
      })

 const { name, email, username, password, password2 } = formData

 ///////////// DATA CHANGES /////////////////
 const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

 const onSubmit = (e) => {
     e.preventDefault()
 }

  return <>
  <section className='logo'>
      <h1 className='fom'>
<FaUser /> Register
      </h1>
      <p className='reg'> Ready to join us? Register here! </p>
  </section>
   
   <section className='fo'>
       <form onSubmit={onSubmit}>
           <div className='form-group'>
           <input 
           type='text'
           className='form-control'
           id='name'
           name='name'
           value={name}
           placeholder='Enter your name'
           onChange={onChange}
           />
           </div>
           <div className='form-group'>
           <input 
           type='text'
           className='form-control'
           id='email'
           name='email'
           value={email}
           placeholder='Enter your Email'
           onChange={onChange}
           />
           </div>
           <div className='form-group'>
           <input 
           type='text'
           className='form-control'
           id='username'
           name='username'
           value={username}
           placeholder='Enter your Username'
           onChange={onChange}
           />
           </div>
           <div className='form-group'>
           <input 
           type='password'
           className='form-control'
           id='password'
           name='password'
           value={password}
           placeholder='Enter a Password'
           onChange={onChange}
           />
           </div>
           <div className='form-group'>
           <input 
           type='password'
           className='form-control'
           id='password2'
           name='password2'
           value={password2}
           placeholder='Confirm your Password'
           onChange={onChange}
           />
           </div>
           <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Click Me! Can't wait to see you around!
            </button>
            </div>
       </form>
   </section>
  </>
}
export default Register

///////////////////////////////////// BEFORE UDEMY //////////////////////////////////
// function Register() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState(false);
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       setError(false);
//       try {
//         const res = await axios.post("/auth/register", {
//             name,
//           username,
//           email,
//           password,
//         });
//         res.data && window.location.replace("/login");
//       } catch (err) {
//         setError(true);
//       }
//     };
//     return (
//       <div className="register">
//         <span className="registerName">Register</span>
//         <form className="registerForm" onSubmit={handleSubmit}>
//           <label>Username</label>
//           <input
//             type="text"
//             className="registerInput"
//             placeholder="Enter your username."
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <label>Email</label>
//           <input
//             type="text"
//             className="registerInput"
//             placeholder="Enter your email."
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <label>Password</label>
//           <input
//             type="password"
//             className="registerInput"
//             placeholder="Enter your password."
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button className="registerButton" type="submit">
//             Register
//           </button>
//         </form>
//         <button className="registerLoginButton">
//           <Link className="link" to="/login">
//             Login
//           </Link>
//         </button>
//       </div>
//     )}

    
























    
