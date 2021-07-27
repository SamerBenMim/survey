import React, { useState,useContext } from 'react';
import { NavLink } from 'react-router-dom'
import {FirebaseContext} from '../_Firebase/index'
import '../../Style/Form.css'
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component'
    const FormSignup = (props) => {
        const firebase = useContext(FirebaseContext);
        const data={
            user:"",
            email:'',
            password:'',
            confirmPassword:'',
        }

        const error={
            user:"",
            email:'',
            password:'',
            confirmPassword:'',

        }
        const erroruser ={
            user:"Please enter a valid username",
            email:'',
            password:'',
            confirmPassword:'',

        }
        const passerror={
            user:"",
            email:'',
            password:'Password does not match',
            confirmPassword:'',

        }
        const emailerror={
            user:"",
            email:'Email address is invalid (Example : samer@proxym.com)',
            password:'',
            confirmPassword:'',
  
        }
        const [loginData,setLoginData]= useState(data)
        const [errors,setError]= useState(error)
        const {user,email,password,confirmPassword}=loginData;

        const handleChange=(e)=>{
            const {email,password}=loginData;
            setLoginData({...loginData,[e.target.id]:e.target.value})

        }
       const handleSubmit = e=>{
           e.preventDefault();
if(user.length<=3)setError(erroruser)
else if (password!==confirmPassword){ 
    setError(passerror)
}else{  setError(error) ;firebase.signupUser(email,password)
 
    
    .then(authUser=> {
        firebase.adduser(authUser.user.uid).set({
            user:user,
            email:email, 
             
                userResult:{
                    bonusMaterialSituation:0,
                bonusWorkingConditions:0,
                bonusWorkLifeBalance :0,
                bonusCareerGrowth:0,
                bonusRespectAndRecognition:0,
                },
                numberOfQuestions:0
              
        })
success()
        setTimeout(() => {
            props.Redirection()

        }, 1500);
    setLoginData({...data})
    
})

.catch(e=>{ console.log(e) ;if(e.message==="The email address is badly formatted.")setError(emailerror)

else if(e.message==="Password should be at least 6 characters"){shortPassword()}
else if(e.message==="The email address is already in use by another account.") emailExist()
 else{ alert(e)  ; setError(error) ;setLoginData({...data}) } })   }

       }
        
     return (
            <div className='Content-form'>
            <form className="formulaire" onSubmit={handleSubmit}>
            <h1>Sign Up</h1> 

                <div className='form-inputs'>

                    <label className='form-label'> Username</label>
                    <input
                    htmlFor="user"
                    required
                     autoComplete='off'
                     id='user'
                     className='form-input'
                    type='text'
                    name='username'
                    placeholder='Enter your username'
                    value={user}
                    onChange={handleChange}
                     />
                     {
                      error && errors.user && <p>{errors.user}</p>
                     }
                </div>
                <div className='form-inputs'>
                    <label className='form-label'> Email</label>
                    <input 
                    htmlFor='email'
                    required
                     autoComplete='off'
                     
                     id='email'
                     type='text'
                     name='email'
                     className='form-input'
                     placeholder='Enter your email'
                     value={email} 
                     onChange={handleChange}
                     />
                    {
                      errors && errors.email && <p>{errors.email}</p>
                    }
                
                </div>
                <div className='form-inputs'>
                    <label className='form-label'> Password</label>
                    <input 
                     htmlFor='password'
                     required
                     id='password'
                     type='password'
                     name='password'
                     className='form-input'
                     placeholder='Enter your password'
                     value={password} 
                     onChange={handleChange}
                     />

                     {
                      errors && errors.password && <p>{errors.password}</p>
                     }

                </div>
                <div className='form-inputs'>
                    <label className='form-label'> Password</label>
                    <input 
                     htmlFor='confirmPassword'
                     required
                     id='confirmPassword'
                     type='password'
                     name='confirmPassword'
                     className='form-input'
                     placeholder='Confirm your password'
                     value={confirmPassword} 
                     onChange={handleChange}
                     />
                    

                     <button className='form-input-btn' type='submit'>Sign up</button>
                </div>
                <span className='form-input-login'>
          Already have an account? Login <NavLink to='/Login' href='#'>here</NavLink>
        </span>
            </form>
            <ReactNotification />

            </div>

        )
    }
    function shortPassword( ){

        store.addNotification({
            width:600,
        
        title:'Error',
        message:'Password should be at least 6 characters',
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
    function emailExist( ){

        store.addNotification({
            width:600,
        
        title:'warning',
        message:'The email address is already in use by another account.',
        type : 'warning',
        container:'top-right',
        insert:'top',
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration:2000
        }
            })
        }
    function success(){

        store.addNotification({
            width:600,
        
        title:'success',
        message:'account created successfully !',
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

export default FormSignup
