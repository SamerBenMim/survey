import React, { Component } from 'react'
import logo from '../../assets/logo.png'
import darklogo from '../../assets/dark-logo.png'

export class Logo extends Component {
    render() {
        return (
            <div className="Logo">
                <a href="https://www.proxym-group.com/"> <img src={logo} alt = 'logo' className="lightLogo"/>  </a>
                <a href="https://www.proxym-group.com/"> <img src={darklogo} alt = 'logo' className="darkLogo"/>  </a>

            </div>
        )
    }
}

export default Logo
