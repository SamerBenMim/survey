import React, { Component } from 'react'
import ImgComponent from './ImgComponent'
import Navbar from './Navbar'
import Text from './Text'
import Footer from './Footer'
import '../../Style/Responsive.css'
import Popup from './Pop-up'

export class Home extends Component {

    constructor(props) {
        super(props)
    }
    state={
        
        open : false
    
  }
  
    
    methode=()=>{
        this.setState({open: !this.state.open,
        } )
    
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

