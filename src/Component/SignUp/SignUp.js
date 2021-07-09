import React, {useState } from 'react'
import Navbar from '../Home/Navbar'
import FormSignup from './FormSignup'
import Img2Component from './WomenImgComponent'

export default function SignUp(props){
var Route = props.history;
    const Redirection=(props)=>{ 
        Route.push('/Welcome')
    }
    
    
    
        return (
            <div>
                <Navbar MyClass="dark-Navbar" mode="medium"/>
                <Img2Component/>
                <FormSignup Redirection={Redirection} />
        




                
                
        
               
            </div> 
        )
    
}

// export default SignUp
