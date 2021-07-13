import React, { useState,useContext,useEffect } from 'react'
import Logout from '../Logout.js/logout'
import {FirebaseContext} from '../_Firebase/index'
import SessoinContext from '../Session/SessionContext'
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'animate.css'
import "animate.css/animate.min.css";



const Results = (props) => {
   /* const [userSession,setUserSession] =useState(null);
    const fb= useContext(FirebaseContext);
 
     useEffect(() => {
        let listener =fb.auth.onAuthStateChanged(user=>{
            user? setUserSession(user):props.history.push('/Login')
        }); 
       return ()=>{
           listener()
       }
     }, [] )*/


 

    return ( 
        <div>
   
 
        
        
        
        
        
        
        </div>
    )
}


export default Results
