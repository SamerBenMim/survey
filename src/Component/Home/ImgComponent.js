import React, { Component } from 'react'
import img from '../../assets/img.png'
import '../../Style/HomeStyle.css'
export class ImgComponent extends Component {
    render() {
        return (
            <div>
                <img src={img} alt = 'img' className="img"/>            
            </div>

        )
    }
}

export default ImgComponent
