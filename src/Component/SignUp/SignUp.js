import React, {useState } from 'react'
import Navbar from '../Home/Navbar'
import FormSuccess from './FormSuccess'
import FormSignup from './FormSignup'
import Img2Component from './WomenImgComponent'

const SignUp=()=>{

    const [isSubmitted , setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }
    
    
        return (
            <div>
                <Navbar MyClass="dark-Navbar" mode="medium"/>
                <Img2Component/>
                 {/* <div id="signup-title">
    
                 <h1 >Get started with us today! Create your account by filling out these informations .</h1>
                 </div> */}
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
            <FormSuccess />
        )}
{/* */ }



                
                
        
               
            </div> 
        )
    
}

export default SignUp
