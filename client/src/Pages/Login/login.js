import React, {useState} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from '../../utils/API'
import "./style.css"


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

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.name, "username")
    setEmail(event.target.name)
    console.log(event.target.value, "password")
    setPassword(event.target.value)

  }

  const newUser = (event) => {
    event.preventDefault()
    console.log("hello")
   

 API.newUser ({
  email: email,
  password: password,
})
.then(res => console.log(" saved to s"))
.catch(err => console.log(err))
  }
  return (
    <>
    {/* <div>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      Sign Up
      </button>

      
        <div className="modal-dialog signin_dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <img src="./images/cÜk_short.png" alt=""></img>
              <p>Registering to this website, you accept our terms of use and our<a href="#"> privacy policy</a> </p>
            </div>
            <div className="modal-body signin_modal">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <button class="nav-link active" id="home-tab" data-toggle="tab" href= "#signup"  role="tab" 
                  aria-controls="home" aria-selected="true">Sign Up</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" id="profile-tab" data-toggle="tab" href= "#signin" role="tab" 
                  aria-controls="profile" aria-selected="false">Sign In</button>
                </li>
              </ul>
              <div className="social_login">
                <p>With your social network</p>
                <ul className="social_log">
                  <li><img src="images/facebook_logo.svg" alt=""></img></li>
                  <li><img src="images/google_plus.png" alt=""></img></li>
                  <li><img src="images/twitter_logo.png" alt=""></img></li>
                </ul>
                <p>or</p>
              </div>
              <div className="tab-content signup_tab" id="myTabContent">
                <div className="tab-pane fade show active" id="signup" role="tabpanel" aria-labelledby="home-tab">
                  <form>
                  <div className="form-group">
                    <input onChange={handleInput} name="name" type="text" className="form-control" id="exampleInputText1" aria-describedby="textHelp" placeholder="Username"></input>
                  </div>
                  <div className="form-group">
                    <input onChange={handleInput} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"></input>
                  </div>
                  <div className="form-group">
                    <input onChange={handleInput} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                  </div>
                  <button onClick= {newUser} type="submit" className="btn btn-primary btn-block">Create An Account</button>
                  <p className="signin_link" >Already Made a CUK? <a id="profile-tab" data-toggle="tab" href= "#signin" role="tab" 
                    aria-controls="profile" aria-selected="false">Sign In</a></p>
                  </form>
                </div>
                <div className="tab-pane fade" id="signin" role="tabpanel" aria-labelledby="profile-tab">
                  <form>
                    <div className="form-group">
                      <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Email"></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                      <input type="password" className="form-control" id="Password" placeholder="Password"></input>                    </div>
                    <p className="forgot_link"><a href="#">Forgot your Password ?</a></p>
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                    <p className="signin_link" >Dont have a CUK? <a id="home-tab" data-toggle="tab" href= "#signup"  role="tab" 
                      aria-controls="home" aria-selected="true">Sign Up</a></p>
                  </form>
                </div>
              </div>
          </div>
        </div>
        </div>
      </div>
     */}
     <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button onClick= {newUser} type="submit" block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>

    </>
  )
}
