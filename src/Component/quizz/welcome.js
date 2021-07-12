import React, { useState,useContext,useEffect } from 'react'
import Logout from '../Logout.js/logout'
import {FirebaseContext} from '../_Firebase/index'
import  Bar  from './bar'
export const Welcome = (props) => {
   
    const [userSession,setUserSession] =useState(null);
    const [userData,setUserData] =useState({});
   const fb= useContext(FirebaseContext);

    useEffect(() => {
       let listener =fb.auth.onAuthStateChanged(user=>{
           user? setUserSession(user):props.history.push('/Login')
       }); 
       if(!!userSession){                 
 
           fb.adduser(userSession.uid)
            .get()
        .then(doc=>{
            if(doc&&doc.exists){
             const myData = doc.data()
            setUserData(myData)
            }
    })
        .catch(e=>alert(e))}
     
        return ()=>{
            listener()
        }
    }, [userSession] )

    console.log(userData)

   return userSession===null ?(
        <div> hahahahah</div>)
: (
            <div style={{textAlign:"center" ,margin:'auto'}}> 
            <h1>WELCOME {userData.user}</h1>
            <Logout></Logout>
            <Bar></Bar>
            </div>
        )
// return   <div style={{textAlign:"center" ,margin:'auto'}}> 
//             <h1>WELCOME {userData.user}</h1>
//             <Logout></Logout>
//             <Bar></Bar>
//             </div>
    }
    
 


export default Welcome
