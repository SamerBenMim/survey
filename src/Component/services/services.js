import Bar from '../quizz/bar'
import React, { useState,useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {FirebaseContext} from '../_Firebase/index'
import { store } from 'react-notifications-component'
import ReactNotification from 'react-notifications-component'
import '../../Style/services.css'
import key from '../../assets/password.png'
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.min.css';
import "animate.css"
// Alternate way to use classes without prefix like `animated fadeIn`
import 'animate.css/animate.compat.css'
export default function Services(props) {
   
    const firebase = useContext(FirebaseContext)
var ok=true
    const[email,setEmail]=useState('');
    const[done,setdone]=useState(true);
    const handleSubmit = e => {
        e.preventDefault();
        
        firebase.auth.sendPasswordResetEmail(email).then(successNotif,
            setEmail(""),
            successNotif
                
        ).catch(echec,ok=false)
                if(ok)
                setTimeout(() => {
                    props.history.push('/Login')
                }, 3000)
    }
    return (
        <div>
              <ReactNotification />
            <Bar></Bar>
            <div className="resetContainer">
            <div className="keycontainer">
            <img src={key} alt = 'key' className="key"/> 
            </div>
            <div className="external-box  reset">
                <form onSubmit={handleSubmit} className="box-container boxReset">
                <div id="container">
                    
                 <h1>Forgot Password?</h1>
                 
                 <input htmlFor='email' required autoComplete='off' onChange={e=>{setEmail(e.target.value)}} className="input1" type = "email" placeholder = "Email" name=""></input>
                 <input disabled={false} className="submit"type = "submit" value = "Reset" name=""></input>
                </div>
                {/* <span className='form-input-login'>
                Don’t have an account? Register  
 <NavLink to='/SignUp' href='#'> here</NavLink>
        </span> */}



        <span className='form-input-login'>
          Already have an account? Login <NavLink to='/Login' href='#'>here</NavLink>
          </span>
                </form>  
            
            </div>
            </div>
        </div>
    )
}
function successNotif( ){
    store.addNotification({
        width:600,
    
    title:'Success',
    message:'An email has been sent to you',
    type : 'success',
    container:'top-right',
    insert:'top',
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
        duration:2000
    }
        })
    }
function echec(){

    return store.addNotification({
        width:600,
    
    title:'Error',
    message:'an error occurred while resetting password ',
    type : 'danger',
    container:'top-right',
    insert:'top',
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
        duration:2000
    }
        })
    }
//     function success(){

//         return store.addNotification({
//             width:600,
        
//         title:'Success',
//         message:'Check your emails',
//         type : 'success',
//         container:'top-right',
//         insert:'top',
//         animationIn: ["animate__animated", "animate__fadeIn"],
//         animationOut: ["animate__animated", "animate__fadeOut"],
//         dismiss: {
//             duration:2000
//         }
//             })
//         }