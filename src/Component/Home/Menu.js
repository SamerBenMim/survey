import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

// import Navigation from 
export class Menu extends Component {

changeColor= (e)=>{console.log( e.target)
 e.target.classList.toggle('hover')
}

    render() {
        return (
            <div className ="Menu">
                <ul> 
                    <li id="pro" className="li">Home</li>
                    <NavLink to="/Login" exact activeClassName="activeLink" onMouseEnter={this.changeColor} onMouseLeave={this.changeColor} className="li">Login</NavLink>
                    <NavLink to="/Login" exact activeClassName="activeLink" className="li" activeClassName="activeLink" onMouseEnter={this.changeColor} onMouseLeave={this.changeColor}>About US</NavLink>
                    <li className="li"><span onMouseEnter={this.changeColor} onMouseLeave={this.changeColor}>Sign in</span></li>
                </ul>
            </div>
        )
    }
}

export default Menu
