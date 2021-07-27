import React, { Component } from 'react'
import  imag from '../../assets/AboutUspng.png'
import '../../Style//AboutUs.css'

export class Picture extends Component {
    render() {
        return (
            <div className="ContainerAboutUsimag">
                <img src={imag} alt = 'img' className="AboutUsimag"/>            
            </div>
        )
    }
}

export default Picture