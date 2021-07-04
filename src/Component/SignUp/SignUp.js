import React, {useState } from 'react'
import Navbar from '../Home/Navbar'
import FormSuccess from './FormSuccess'
import FormSignup from './FormSignup'


const SignUp=()=>{

    const [isSubmitted , setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }
    
        return (
            <div>
                <Navbar/>
                <div style={{textAlign:'center'}}>
                 <h1 style={{textAlign:"center"}}>SignUp Page</h1>
                 <h1 style={{textAlign:"center"}}>Get started with us today! Create your account by filling out the
          information below.</h1>
                
                
                 

        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
            <FormSuccess />
        )}




                
                 </div>
        )
               
            </div>
        )
    
}

export default SignUp
