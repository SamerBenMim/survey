import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

// import Navigation from 
export class Menu extends Component {

changeColor= (e)=>{
 e.target.classList.toggle('hover')
}
state={
    li:'li',
mystyle: "Navbar"
}
change=()=>{
    this.setState({
    li:'dark-li'
    })
}

    render() {
        return (
            <div className ="Menu">
                <ul> 
                    <NavLink to="/" exact activeClassName="activeLink" onMouseEnter={this.changeColor} onMouseLeave={this.changeColor} className={this.state.li}>Home</NavLink>
                    <NavLink  to="/Login" exact fn={this.change} activeClassName="activeLink"  onMouseEnter={this.changeColor} onMouseLeave={this.changeColor} className={this.state.li} onClick={this.change}>Login</NavLink>
                    <NavLink to="/AboutUs" exact activeClassName="activeLink" className={this.state.li} activeClassName="activeLink" onMouseEnter={this.changeColor} onMouseLeave={this.changeColor}>About US</NavLink>
                    <NavLink className={this.state.li}to="/SignUp" exact><span className="bouton" onMouseEnter={this.changeColor} onMouseLeave={this.changeColor}>Sign Up</span></NavLink>
                </ul>
            </div>
        )
    }
}

export default Menu
