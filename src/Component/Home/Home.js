import React, { Component } from 'react'
import ImgComponent from './ImgComponent'
import Navbar from './Navbar'
import Text from './Text'
import Footer from './Footer'
import '../../Style/Responsive.css'
import SmallMenu from './Small-Menu'
export class Home extends Component {
    
    render() {
        return (
            
            <>
                <Navbar MyClass="Navbar"/>
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
