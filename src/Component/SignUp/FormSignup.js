import React, { useState } from 'react';
import useForm from './useForm'
import validate from './validateInfo';
import '../../Style/Form.css'
    const FormSignup = ({submitForm}) => {
        const { handleChange,  values,handleSubmit,errors } = useForm(submitForm,validate);
    

        return (
            <div className='Content-form'>
            <form className="formulaire" onSubmit={handleSubmit}>
            <h1>Sign Up</h1> 

                <div className='form-inputs'>

                    <label className='form-label'> Username</label>
                    <input
                     id='user'
                     className='form-input'
                    type='text'
                    name='username'
                    placeholder='Enter your username'
                    value={values.username}
                    onChange={handleChange}
                     />
                     {errors.username && <p>{errors.username}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'> Email</label>
                    <input 
                     id='email'
                     type='text'
                     name='email'
                     className='form-input'
                     placeholder='Enter your email'
                     value={values.email} 
                     onChange={handleChange}
                     />
                    {errors.email && <p>{errors.email}</p>}
                
                </div>
                <div className='form-inputs'>
                    <label className='form-label'> Password</label>
                    <input 
                     id='password'
                     type='password'
                     name='password'
                     className='form-input'
                     placeholder='Enter your password'
                     value={values.password} 
                     onChange={handleChange}
                     />
                     {errors.password && <p>{errors.password}</p>}

                </div>
                <div className='form-inputs'>
                    <label className='form-label'> Password</label>
                    <input 
                     id='password2'
                     type='password'
                     name='password2'
                     className='form-input'
                     placeholder='Confirm your password'
                     value={values.password2} 
                     onChange={handleChange}
                     />
                    {errors.password2 && <p>{errors.password2}</p>}

                     <button className='form-input-btn' type='submit'>Sign up</button>
                </div>
                <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
            </form>
            </div>

        )
    }
   

export default FormSignup
