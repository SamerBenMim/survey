import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export class SmallMenu extends Component {
  

    state={
        display: 'none',
        opacity: '0%',
      }
     
      
     
      Open=()=>{
        var i=100 
        this.setState({
            display: "block", 
            })
       var end = setInterval(()=>{  if(i<=100) {this.setState({
            opacity: i+"%", 
            }) 
            i++;
        }else{
           clearInterval(end)     
            } 
                    

    
    },1)    
        
      }
      CloseMenu=()=>{
        var i=100 
       var end = setInterval(()=>{  if(i>=0) {this.setState({
            opacity: i+"%", 
            }) 
            i--;
        }else{
           clearInterval(end)     
            } 
                    

    
    },1)    
        setTimeout(()=>{this.setState({
            display: "none", 
            }) },2000)
      }
     /*constructor(props){
    super(props)
if(!window.location.pathname){
  window.location.pathname='/'
}
}*/ 
    render() {
        return (
           <div className="menu-small" style={{  display: this.state.display,
           opacity: this.state.opacity,
           position: 'fixed',
           width: '100%',
           height: '100%',
           top: '0px',
           left: '0px',
           zIndex: '100',
           backgroundColor: '#fc6b5a',
           textAlign: 'center',
           transition: '2s ease-in-out',}} >
                <div class="container2">
 
                <NavLink id="exit" to={ window.location.pathname}exact onClick={this.CloseMenu} ><p>X</p></NavLink>
                <NavLink to="/" onClick={this.CloseMenu} exact><p>Home</p></NavLink>
                <NavLink to="/SignUp" exact onClick={this.CloseMenu}><p>Sign Up</p></NavLink>
                <NavLink to="/AboutUs" exact onClick={this.CloseMenu}><p>About Us</p></NavLink>
                <NavLink to="/Login"  exact onClick={this.CloseMenu}> <p class="bouton3">Login</p></NavLink>
        </div> 
        </div> 
        )
    }
}

export default SmallMenu

