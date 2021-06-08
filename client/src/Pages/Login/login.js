import React, {useState } from 'react';
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import API from '../../utils/API'
import "./style.css"
import Input from '../../components/Input';
// import { Redirect } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

// function Login(props) {
//   const [userReq, setUserReq] = useState({
//     name: "",
//     email: "",
//     password: ""
//   })

  const handleEmailInput = event => {
  const {value} = event.target;
    console.log(event.target.value, "email")
    setEmail(value);
  }   
  const handlePasswordInput = event => {
    const {value} = event.target;
    console.log(event.target.value, "password")
  setPassword(value);
  }

  const login = (event) => {
    event.preventDefault()
    const email = event.target.getAttribute("email")
    const password = event.target.getAttribute("password")
    // if (email && password) {
    //   localStorage.setItem("token", "T");
    //   setEmail && setPassword({
    //     islogged: true
    //   });
    // }
 API.logIn ({
  email: email,
  password: password,
})
.then(res =>{ 
  document.location.replace('/')
})
.catch(err => console.log(err))
  }
  return (
     <Form className="Login">
       <div className="form-group-center">
      <Input
        value={email}
        onChange={handleEmailInput}
        name="Email"
        type="text"
       placeholder="Type in your Email"
      />
      <Input
        name="Password"
        type="text"
        value={password}
        onChange={handlePasswordInput}
        placeholder="Type in your Password"
      />
      <button className="btn-sm btn-success" email={email} password={password} onClick={(e) => login(e)} type="submit" block size="lg" disabled={!validateForm()}>
          Login
        </button>
     </div>
    </ Form>
  )
}
// import React, { Component } from "react";
// // import "./Login.css";
// import { Redirect } from "react-router-dom";

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       islogged: false,
//       loginParams: {
//         email: "",
//         password: ""
//       }
//     };
//   }
//   handleFormChange = event => {
//     let loginParamsNew = { ...this.state.loginParams };
//     let val = event.target.value;
//     loginParamsNew[event.target.name] = val;
//     this.setState({
//       loginParams: loginParamsNew
//     });
//   };
 
//   login = event => {
//     let email = this.state.loginParams.email;
//     let password = this.state.loginParams.password;
//     if (email === "michael.t@yahoo.com" && password === "mike1234") {
//       localStorage.setItem("token", "T");
//       this.setState({
//         islogged: true
//       });
//     }
//     event.preventDefault();
//   };


//   render() {
//     if (localStorage.getItem("token")) {
//       return <Redirect to="/" />;
//     }
//     return (
//       <div className="container text-center">
//         <form className="form-signin">
//           <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
//           <div className="row">
//             <div className="col ">
//               <input
//                 type="text"
//                 name="email"
//                 onChange={this.handleFormChange}
//                 placeholder="Enter Username"
//               />
//               <input
//                 type="password"
//                 name="password"
//                 onChange={this.handleFormChange}
//                 placeholder="Enter Password"
//               />
//               <button type="submit" value="Login" className="btn-warning text-center" onClick={this.login}>Log In</button>
//             </div>
//           </div>
//           {/* <p>user_id === "admin" && user_password === "123"</p> */}
//         </form>
       
//       </div>
//     );
//   }
// }
