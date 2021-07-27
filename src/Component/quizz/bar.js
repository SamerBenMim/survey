import React, { Component } from 'react'
import '../../Style/bar.css'
import './assets/icons/pe-icon-7-stroke/css/pe-icon-7-stroke.css'
import './assets/icons/pe-icon-7-stroke/css/helper.css'
import { NavLink } from 'react-router-dom'




  

export class Barr extends Component {
     
    render() {
        return (
            <div>
                <div>
            <div className="sidebar active">
        <ul className="list">
        <NavLink to="/Welcome" exact  activeClassName="active" className="list-item" >
                <b></b>
                <b></b>
                <a href="#" className="list-item-link">
                    <div className="icon">
                        <i className="pe-7s-home"></i>
                    </div>
                    <span className="title">Home</span>
                </a>
                </NavLink>





            <NavLink to="/Results" exact  activeClassName="active" className="list-item" >

                <b></b>
                <b></b>
                <a className="list-item-link" >
                    <div className="icon">
                        <i className="pe-7s-rocket"></i>
                    </div>
                    <span className="title">My results</span>
                </a>
                </NavLink>





            <NavLink to="/Statistics" exact  activeClassName="active" className="list-item" >
                <b></b>
                <b></b>
                <a className="list-item-link ">
                    <div className="icon">
                        <i className="pe-7s-tools"></i>
                    </div>
                    <span className="title">Statistics</span>
                </a>
                </NavLink>


            <NavLink to="/Services" exact  activeClassName="active" className="list-item" >
                <b></b>
                <b></b>

                < a className="list-item-link">
                    <div className="icon">
                        <i className="pe-7s-film"></i>
                    </div>
                    <span className="title">            
                  Services
</span>
                </a>
            </NavLink>


            <NavLink to="/InfoStats" exact  activeClassName="active" className="list-item" >
                <b></b>
                <b></b>
                <a  className="list-item-link">
                    <div className="icon">
                        <i className="pe-7s-light"></i>
                    </div>
                    <span className="title">Stats Info</span>
                </a>
                </NavLink>



            <NavLink to="/ContactUs" exact  activeClassName="active" className="list-item" >
                <b></b>
                <b></b>
                <a href='/Results' className="list-item-link">
                    <div className="icon">
                        <i className="pe-7s-call"></i>
                    </div>
                    <span className="title">Contact Us</span>
                </a>
                </NavLink>




        </ul>
    </div>
{/* toggle button */}
    <div className="toggle active" 
       
    onClick={
     
    ()=>{
       
        let toggleBtn = document.querySelector('.toggle');
    let sidebar = document.querySelector('.sidebar');
    toggleBtn.classList.toggle('active');
    sidebar.classList.toggle('active');
    }

 
    }>
        <i className="pe-7s-menu open"></i>
        <i className="pe-7s-close close"></i>
    </div>
        </div>
            
          
            </div>
          

        )
    }
}

export default Barr
