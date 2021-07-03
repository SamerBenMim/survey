import React, { Component } from 'react'
import Logo from './Logo'
import Menu from './Menu'
import menu from '../../assets/menu.svg'

// export class Navbar extends Component {
    const Navbar = (props)=> {



            // console.log(props)
        
         


    // render() {
        return (
            <div className="Navbar">
              <Logo/>
              <Menu/>
              <img className ="menu-button" src = {menu}></img>
  
            </div>
        )
   // }
}

export default Navbar
