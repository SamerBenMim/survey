import React from 'react'
import  imag from '../../assets/checkmark.png'
import { NavLink } from 'react-router-dom'

export default function Done() {
    return (
        <div className="doneContainer display">
                            <img src={imag} alt = 'img' className="doneImg"/>  
                            <h1 style={{color:'#22c365'}}>Data Saved Successfully!</h1> 
                            <h1>You can now see your resluts Press here</h1> 
                            <NavLink to="/Results" exact style={{textDecoration:"none"}}>
                            <div  class="activedone buttondone"><div  class="circledone"></div><h3>Results</h3></div>
                            </NavLink>
        </div>
    )
}
