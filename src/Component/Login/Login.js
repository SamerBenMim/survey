import React, { useState,useEffect,useContext } from 'react'
import Navbar from '../Home/Navbar'
import LoginBox from './LoginBox'
import ImgComponent from './ImgComponent'
import {FirebaseContext} from '../_Firebase/index'
import Loader from '../Loader/Loader'
const Login=(props) =>  {
    const [userSession,setUserSession] =useState(null);
    const [isConncected,setIsConnected] =useState(false);

    const fb= useContext(FirebaseContext);
useEffect(() => {
    let listener =fb.auth.onAuthStateChanged(user=>{
        setUserSession(user)   ; setIsConnected(true)}  )
}, [userSession])

   


    
    var Route = props.history;

     const Redirection=( props)=>{ 
        Route.push('/Welcome')
    }
    
 if(!userSession){
     if(isConncected)
    return (
        <div>
           
            <Navbar MyClass="Navbar" mode="dark"/>
            <div className="Container">
            <ImgComponent />
            <LoginBox Redirection={Redirection} />
            </div>
        </div>
    )
    else{
        return null
    }
 }
 else{
     setTimeout(() => {
        Redirection()
     }, 1000);
 
return   <Loader direction={Redirection}></Loader>
 } 
   
   // }
}

export default Login
