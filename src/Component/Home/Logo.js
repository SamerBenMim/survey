import React, { Component } from 'react'
import logo from '../../assets/logo.png'
 
export class Logo extends Component {
    render() {
        return (
            <div className="Logo">
                <a href="https://www.proxym-group.com/"> <img src={logo} alt = 'logo' className="Logo"/>  </a>
            </div>
        )
    }
}

export default Logo
