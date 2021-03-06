import React, { useState,useEffect,useContext } from 'react'
import '../../Style/Responsive.css'
import '../../Style/LoginStyle.css'
import { NavLink } from 'react-router-dom'
import {FirebaseContext} from '../_Firebase/index'
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component'
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
    }).catch(e=> {err()}
        
        // e=>{
        //   }
    )
}
    useEffect(()=>{})
        return (<>
            <ReactNotification />

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
                <p style={{marginTop:"3px"}} className='form-input-login'>
               Forgot pasword ? press  
 <NavLink to='/Services' href='#'> here</NavLink>
        </p>
                </form>  

            </div>
            </>
        )
     
}

function err(){
    store.addNotification({
        width:600,
    
    title:'warning',
    message:'There is no user record corresponding to this identifier. The user may have been deleted.',
    type : 'warning',
    container:'top-left',
    insert:'top',
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
        duration:2000
    }
        })
    }
export default LoginBox


 