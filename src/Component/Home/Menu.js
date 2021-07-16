import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import Navigation from 
export class Menu extends Component {
    state={
        li:'li',
    }

    constructor(props){
        super(props)
        if(props.mode === 'dark'){

            this.state.li = 'dark-li'
           
        }
        else if (props.mode === 'medium'){
            this.state.li = 'medium-li'

        }
        else {
            this.state.li = 'li'
        }
    }
   
changeColor= (e)=>{ if(this.props.mode==='dark') e.target.classList.toggle('dark-hover')
else if( this.props.mode==='medium'){
    e.target.classList.toggle('medium-hover')
}
else
 e.target.classList.toggle('hover')
}



 

    render() {
        return (
            <div className ="Menu">
                <ul> 
                    <NavLink to="/" exact activeClassName="activeLink" onMouseEnter={this.changeColor} onMouseLeave={this.changeColor} className={this.state.li}>Home</NavLink>
                    <NavLink  to="/SignUp" exact fn={this.change} activeClassName="dark-activeLink"  onMouseEnter={this.changeColor} onMouseLeave={this.changeColor} className={this.state.li} onClick={this.change}>Sign Up</NavLink>
                    <NavLink to="/AboutUs" exact activeClassName="activeLink" className={this.state.li} activeClassName="activeLink" onMouseEnter={this.changeColor} onMouseLeave={this.changeColor}>About US</NavLink>
                    <NavLink className={this.state.li}to="/Login" exact><span className="bouton" ><div className="circleAnim"></div><h3>Login</h3></span></NavLink>
                </ul>
            </div>
        )
    }
}

export default Menu
