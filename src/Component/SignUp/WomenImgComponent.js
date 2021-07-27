import React, { Component } from 'react'
import img from '../../assets/img2.png'
import '../../Style/HomeStyle.css'
export class Img2Component extends Component {
    render() {
        return (
            <div className ="overflow">
                <img src={img} alt = 'img' className="img"/>            
            </div>

        )
    }
}

export default Img2Component
