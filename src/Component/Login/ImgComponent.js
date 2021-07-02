import React, { Component } from 'react'
import  imag from '../../assets/login.png'
import '../../Style/LoginStyle.css'

export class ImgComponent extends Component {
    render() {
        return (
            <div>
                <img src={imag} alt = 'img' className="imag"/>            
            </div>
        )
    }
}

export default ImgComponent
