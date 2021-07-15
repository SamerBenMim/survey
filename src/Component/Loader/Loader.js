import React from 'react'
import img from '../../assets/Loader.png'
import '../../Style/Loader.css'
         
export default function Loader(props) {
    if(props.Redirection){
        props.Redirection()

    }
    return (
        
        <div style={{textAlign:'center'}}>
                            <img src={img} alt = 'loader' className="loader"/> 
                            <h1 style={{fontSize : "50px" ,     marginLeft: '21px'}}>Loading ...</h1>
        </div>
    )
}
