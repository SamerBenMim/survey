import React, { Component } from 'react'
import Logo from './Logo'
import Menu from './Menu'
import menu from '../../assets/menu.svg'
import SmallMenu from './Small-Menu'
import Login from '../Login/Login'
export class Navbar extends Component {
 
    
      constructor(props){
       
        super(props)
        this.SmallMenuElement = React.createRef();
        // console.log(this.SmallMenuElement)
        }
        
         state = {
          changer:'false',
         }
         OpenMenu=()=>{
          this.SmallMenuElement.current.Open();
         }

render(){
        return (
            <div className={this.props.MyClass}>
              <Logo/>
              <Menu mode={this.props.mode}/>
              <SmallMenu ref={this.SmallMenuElement} propriety={this.state.changer} />
              <img onClick= {this.OpenMenu} className ='menu-button' src = {menu}  ></img>
            </div>
        )
      }
}


export default Navbar
