import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class ErrorText extends Component {
    render() {
        return (
            <div className='cont-Error-text'>
                <div className='Error-text'>
                <h1>404</h1>
                <h3>Page Not Found</h3>
                <p>We're sorry the page uou requested could not be found please go back to the home page</p>
                <div>   <NavLink className='Error-text-button' to="/" exact><span>Go Home</span></NavLink></div>
             
                </div>
                </div>    
        )
    }
}

export default ErrorText
