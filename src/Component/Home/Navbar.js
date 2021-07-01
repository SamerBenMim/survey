import React, { Component } from 'react'
import Logo from './Logo'
import Menu from './Menu'
export class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
              <Logo/>
              <Menu/>  
            </div>
        )
    }
}

export default Navbar
