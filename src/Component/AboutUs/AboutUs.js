import React, { Component } from 'react'
import Navbar from '../Home/Navbar'
import Picture from './Picture'
export class AboutUs extends Component {
    render() {
        return (
            <>
            <Navbar MyClass="dark-Navbar" mode="medium"/>
            <div className="ContainerAboutUs">
            <Picture></Picture>
            <div style={{width:'100%'}}>
            <div className="MyTextContainer">
            <h1>
                Who Are We ?    
                </h1>
            <p>
            Our Society was founded in 2021 as a national organisation to support and further the work of statistical societies already in existence.
            The overall objective of the Society is to further the study, application and good practice of statistical theory and methods in all branches of learning and enterprise. Our Society is incorporated in Tunisia .
            </p>
            </div>
            </div>
            </div>

</>
        )
    }
}

export default AboutUs
