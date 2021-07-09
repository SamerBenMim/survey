import React, { Component } from 'react'
import Navbar from '../Home/Navbar'
import LoginBox from './LoginBox'
import ImgComponent from './ImgComponent'
const Login=(props) =>  {
    var Route = props.history;

     const Redirection=( props)=>{ 
        Route.push('/Welcome')
    }
    
  //  render() {
        return (
            <div>
               
                <Navbar MyClass="Navbar" mode="dark"/>
                <div className="Container">
                <ImgComponent />
                <LoginBox Redirection={Redirection} />
                </div>
            </div>
        )
   // }
}

export default Login
