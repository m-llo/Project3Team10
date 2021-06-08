import React, {useState} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from '../../utils/API'
import "./style.css"
import Input from '../../components/Input';


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

  const newUser = (event) => {
    event.preventDefault()
    const email = event.target.getAttribute("email")
    const password = event.target.getAttribute("password")

 API.newUser ({
  email: email,
  password: password,
})
.then(res => console.log(email, password + "'s finally showing"))
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
      <button className="btn-sm btn-success" email={email} password={password} onClick={(e) => newUser(e)} type="submit" block size="lg" disabled={!validateForm()}>
          Login
        </button>
     </div>
    </ Form>
  )
}
