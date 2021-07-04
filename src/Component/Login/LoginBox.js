import React, { Component } from 'react'
import '../../Style/Responsive.css'
import '../../Style/LoginStyle.css'

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
                </form>  
               
            </div>
        )
    }
}

export default LoginBox
 