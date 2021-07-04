import React, { Component } from 'react'
import Logo from './Logo'
import Menu from './Menu'
import menu from '../../assets/menu.svg'
import SmallMenu from './Small-Menu'
export class Navbar extends Component {
 
      // OpenMenu = ()=>{
      //   var menu = document.querySelector(".menu-button");
      //   console.log("hahah")
      //   menu.style.display='block' ;
      // }
      constructor(props){
        super(props)
        this.SmallMenuElement = React.createRef();
    }
        
         state = {
          changer:'false'
         }
         OpenMenu=()=>{
          this.SmallMenuElement.current.Open();
         }

render(){

        return (
            <div className="Navbar">
              <Logo/>
              <Menu mode={this.props.mode}/>
              <SmallMenu ref={this.SmallMenuElement} propriety={this.state.changer} />
              <img onClick= {this.OpenMenu} className ='menu-button' src = {menu}  ></img>
            </div>
        )
      }
}


export default Navbar
