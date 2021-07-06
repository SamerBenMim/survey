import React, { Component } from 'react'
import '../../Style/Responsive.css'
import '../../Style/LoginStyle.css'
import { NavLink } from 'react-router-dom'


export class LoginBox extends Component {
    render() {
        return (
            <div className="external-box">
                <form className="box-container">
                <div id="container">
                 <h1>Login</h1>
                 <input className="input1" type = "text" placeholder = "Username" name=""></input>
                 <input  className="input2" type = "password" placeholder = "password" name=""></input>
                 <input  className="submit"type = "submit" value = "login" name=""></input>
                </div>
                <span className='form-input-login'>
          Already have an account? Login <NavLink to='/SignUp' href='#'>here</NavLink>
        </span>
                </form>  
            
            </div>
        )
    }
}

export default LoginBox
 