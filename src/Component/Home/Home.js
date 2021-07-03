import React, { Component } from 'react'
import ImgComponent from './ImgComponent'
import Navbar from './Navbar'
import Text from './Text'
import Footer from './Footer'
import '../../Style/Responsive.css'

export class Home extends Component {
    render() {
        return (
            
            <>
                <Navbar/>
                <ImgComponent/>
                <Text/>   
                <br></br>
                <br></br>
                <Footer />
          
                             

                {/* <ImgComponent/>
                <Text/> 
                <Footer />  */}
        
           </>
        
        )
    }
}

export default Home
