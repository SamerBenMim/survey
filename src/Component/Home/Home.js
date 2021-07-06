import React, { Component,useState } from 'react'
import ImgComponent from './ImgComponent'
import Navbar from './Navbar'
import Text from './Text'
import Footer from './Footer'
import '../../Style/Responsive.css'
import Popup from './Pop-up'
import SmallMenu from './Small-Menu'

export class Home extends Component {

    constructor(props) {
        super(props)
console.log(this.state)  
    }
    state={
        samer: "zai",
        open : false
    
  }
  
    
    methode=()=>{
        this.setState({open: !this.state.open,
        samer : "znb"
        } )
    console.log(" ====> ", this.state.open , ) 
   // this.methode1()
    }
    
    methode1=()=>{
        console.log('true')
    }

    render() {
        return (
            
                 <>
                <Navbar MyClass="Navbar" />
                <ImgComponent />
                <Text methode={this.methode}/>   
                <Footer />
                <Popup  myState={this.state}    ></Popup>
                </>
        )
    }
}

export default Home

