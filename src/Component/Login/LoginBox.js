import React, { useState,useEffect,useContext } from 'react'
import '../../Style/Responsive.css'
import '../../Style/LoginStyle.css'
import { NavLink } from 'react-router-dom'
import {FirebaseContext} from '../_Firebase/index'
import { Admin } from '../_Firebase/Firebase'
const LoginBox=(props)=> {
   const firebase = useContext(FirebaseContext)

   const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const handleSubmit = e => {
    e.preventDefault();
    firebase.loginUser(email,password).then(user=>{ props.Redirection()
    setEmail('');
    setPassword('');
    }).catch(e=>{
        alert(e)
    }
    )
}
    useEffect(()=>{})
        return (
            <div className="external-box">
                <form onSubmit={handleSubmit} className="box-container">
                <div id="container">
                    
                 <h1>Login</h1>
                 
                 <input htmlFor='email' required autoComplete='off' onChange={e=>{setEmail(e.target.value)}} className="input1" type = "email" placeholder = "Username" name=""></input>
                 <input required autoComplete='off'  onChange={e=>{setPassword(e.target.value)}}className="input2" type = "password" placeholder = "password" name=""></input>
                 <input  className="submit"type = "submit" value = "login" name=""></input>
                </div>
                <span className='form-input-login'>
                Don’t have an account? Register  
 <NavLink to='/SignUp' href='#'> here</NavLink>
        </span>
                </form>  
            
            </div>
        )
     
}
export default LoginBox


 