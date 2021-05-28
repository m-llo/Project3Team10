import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
// import { response } from 'express';

class Signup extends Component {
    constructor(){
        super()
        this.state = {
            username:'',
            email:'',
            password:''

        }
        this.changeUsername = this.changeUsername.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }


    onSubmit(event){
        event.preventDefault()

        const registered = {
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }

        axios.post('http://localhost:4000/app/signup', registered)
             .then(response => console.log(response.data))

        this.setState({
            username:'',
            password:'',
            email:''
        })
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='form-div'>
                    <br></br>
                        <form onSubmit={this.onSubmit}>
                            <input type='text'
                            placeholder='Username'
                            onChange={this.changeUsername}
                            value={this.state.username}
                            className='form-control form-group'
                            />

                            <br></br>

                            <input type='password'
                            placeholder='Password'
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='form-control form-group'
                            />

<br></br>

                            <input type='text'
                            placeholder='E-mail'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control form-group'
                            />

                            <input type='submit' className= 'btn btn-danger btn-block' value='submit'/>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}

export default Signup;