import React, { Component } from 'react'
import ImgComponent from './ImgComponent'
import Navbar from './Navbar'
import Text from './Text'
import Footer from './Footer'
export class Home extends Component {
    render() {
        return (
            
            <>
                
                
                <Navbar/>
                <ImgComponent/>
                <Text/> 
                <Footer /> 
               

           </>
        
        )
    }
}

export default Home
