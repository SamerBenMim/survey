import React, { Component } from 'react'
import img from '../../assets/404.png'

export class Img404 extends Component {
    render() {
        return (
            <div className='cont-image404'>
            <div style={{overflowX: 'hidden'}}>
            <img src={img} alt = 'img' className="img404"/>            
            </div>
            </div>
        )
    }
}

export default Img404
