import React from 'react'
import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'


//////////// COMPONENT FUNCTION ////////////////

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
      })

 const { username, password } = formData

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
  <div className='pic'>
  {/* <img 
className='homeImg'
src="https://i.pinimg.com/736x/20/41/ee/2041eedeac322b424aec89fd57c85396.jpg"  /> */}
  <section className='log'>
      <h1>
<FaSignInAlt /> Login
      </h1>
      <p className='captionlogin'> SO excited to see you again!</p>
  </section>
   
  <section className='form'>
    
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='username'
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
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>

           <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Click Me! Welcome Back!
            </button>
            </div>
  
       </form>
   </section>
   </div>
  </>
}
export default Login









































///////////////////////////// BEFORE UDEMY /////////////////////////////

// function Login() {
//     const { dispatch } = useContext(Context);
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       dispatch({ type: "LOGIN_START" });
//       try {
//         const res = await axios.post("/auth/login", {
//           username: "",
//           password: "",
//         });
//         dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
//       } catch (err) {
//         dispatch({ type: "LOGIN_FAIL" });
//       }
//     };
  
//     return (
//       <div className="login">
//         <span className="loginName">Login</span>
//         <form className="loginForm" onSubmit={handleSubmit}>
//           <label>Username</label>
//           <input
//             type="text"
//             className="loginInput"
//             placeholder="Enter your username."
//           />
//           <label>Password</label>
//           <input
//             type="password"
//             className="loginInput"
//             placeholder="Enter your password."
//           />
//           <button className="loginButton" type="submit">
//             Login
//           </button>
//         </form>
//         <button className="loginRegisterButton">
//           <Link className="link" to="/register">
//             Register
//           </Link>
//         </button>
//       </div>
//     );
//   }
  
//   export default Login;
  