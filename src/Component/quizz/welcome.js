import { user } from 'firebase-functions/lib/providers/auth'
import React, { useState,useContext,useEffect } from 'react'
import Logout from '../Logout.js/logout'
import {FirebaseContext} from '../_Firebase/index'
import Bar  from './bar'
import Loader from '../Loader/Loader'
import QuizzBox from './QuizzBox'
import WelcomeImg from './WelcomeImg'
export const Welcome = (props) => {
    const [userSession,setUserSession] =useState(null);
    const [userData,setUserData] =useState({});
    const [userUID,setUserUID] =useState('');
    const fb= useContext(FirebaseContext);
    
    useEffect(() => {
       let listener =fb.auth.onAuthStateChanged(user=>{
           user? setUserSession(user):props.history.push('/Login')
           if( user&&user.uid==='XwwwxAp18nZ03kCsTCM5fNXUu512'){
            props.history.push('/espaceAdmin');
           }
           else{
               
           }        setUserUID(user.uid)

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
        .catch(e=>alert(e))
    }
        return ()=>{
            listener()
        }
    }, [userSession] )

    console.log(userUID)
   return userSession===null ?(<div> <Loader></Loader></div>)
: (
            <div style={{textAlign:"center" ,margin:'auto',fontFamily:" 'Montserrat', sans-serif"}}> 
            <div className="WlcBar">
            <WelcomeImg/>
            <h1 className ='userName'>{userData.user}</h1>
            </div>
            <QuizzBox userId= {userUID}></QuizzBox>
            {/* <h1>WELCOME {userData.user}</h1>
            <Logout></Logout> */}
            <Bar></Bar>
            </div>
        )
    }
    
 


export default Welcome
