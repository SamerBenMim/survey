import React, { useState,useContext,useEffect } from 'react'
import Logout from '../Logout.js/logout'
import {FirebaseContext} from '../_Firebase/index'
import SessoinContext from '../Session/SessionContext'
const Results = (props) => {
    const [userSession,setUserSession] =useState(null);
    const fb= useContext(FirebaseContext);
 
     useEffect(() => {
        let listener =fb.auth.onAuthStateChanged(user=>{
            user? setUserSession(user):props.history.push('/Login')
        }); 
       return ()=>{
           listener()
       }
     }, [] )




    return ( 
        <div>
   
            
         <h1>pppppppppppppppp </h1> 
        
        
        
        
        
        
        </div>
    )
}

export default Results
