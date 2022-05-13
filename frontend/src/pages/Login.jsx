import React from 'react'

function Login() {
  return (
    <div>Login</div>
  )
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
  