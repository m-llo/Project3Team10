import React, {useState} from 'react'
import API from '../../utils/API'
import "./style.css"
import Input from '../../components/Input';
import Hero from '../../components/Hero';
import Form from "react-bootstrap/Form";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

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
  <div>
    <Hero />
    <div className="container">
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
      <button className="btn btn-warning" email={email} password={password} onClick={(e) => login(e)} type="submit" block size="lg" disabled={!validateForm()}>
          Login
      </button>
      </div>
    </ Form>
   </div>
  </div>
  )
}
