import React, { Component } from 'react'
import Navbar from '../Home/Navbar'
import LoginBox from './LoginBox'
import ImgComponent from './ImgComponent'
export class Login extends Component {

    
    render() {
        return (
            <div>
               
                <Navbar MyClass="Navbar" mode="dark"/>
                <div className="Container">
                <ImgComponent />
                <LoginBox />
                </div>
            </div>
        )
    }
}

export default Login
