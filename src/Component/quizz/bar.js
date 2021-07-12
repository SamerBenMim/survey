import React, { Component } from 'react'
import '../../Style/bar.css'
import './assets/icons/pe-icon-7-stroke/css/pe-icon-7-stroke.css'
import './assets/icons/pe-icon-7-stroke/css/helper.css'

/** let list = document.querySelectorAll('.list-item');
for(let i=0; i<list.length; i++){
    list[i].onclick = function(){
        let j = 0;
        while(j < list.length){
            list[j++].className = 'list-item';
        }
        list[i].className = 'list-item active';
    }
}

let toggleBtn = document.querySelector('.toggle');
let sidebar = document.querySelector('.sidebar');
toggleBtn.onclick = function(){
    toggleBtn.classList.toggle('active');
    sidebar.classList.toggle('active');
} */

export class bar extends Component {



    render() {
        return (
            <div>
                <div>
            <div className="sidebar">
        <ul className="list">
            <li className="list-item active">
                <b></b>
                <b></b>
                <a href="#" className="list-item-link">
                    <div className="icon">
                        <i className="pe-7s-home"></i>
                    </div>
                    <span className="title">Home</span>
                </a>
            </li>
            <li className="list-item" onClick={(e)=>{
                     let list = document.querySelectorAll('.list-item');

                    for(let i=0; i<list.length; i++){
                        list[i].onclick = function(){
                            let j = 0;
                            while(j < list.length){
                                list[j++].className = 'list-item';
                            }
                            list[i].className = 'list-item active';
                        }
                    }


            }}>
                <b></b>
                <b></b>
                <a href="#" className="list-item-link">
                    <div className="icon">
                        <i className="pe-7s-rocket"></i>
                    </div>
                    <span className="title">My results</span>
                </a>
            </li>
            <li className="list-item">
                <b></b>
                <b></b>
                <a href="#" className="list-item-link">
                    <div className="icon">
                        <i className="pe-7s-tools"></i>
                    </div>
                    <span className="title">Statistics</span>
                </a>
            </li>
            <li className="list-item">
                <b></b>
                <b></b>
                <a href="#" className="list-item-link">
                    <div className="icon">
                        <i className="pe-7s-film"></i>
                    </div>
                    <span className="title">Services</span>
                </a>
            </li>
            <li className="list-item">
                <b></b>
                <b></b>
                <a href="#" className="list-item-link">
                    <div className="icon">
                        <i className="pe-7s-light"></i>
                    </div>
                    <span className="title">Stats Info</span>
                </a>
            </li>
            <li className="list-item">
                <b></b>
                <b></b>
                <a href="#" className="list-item-link">
                    <div className="icon">
                        <i className="pe-7s-call"></i>
                    </div>
                    <span className="title">Contact Us</span>
                </a>
            </li>
        </ul>
    </div>

    <div className="toggle" onClick={
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
        <script src ='./script.js' >
            
            </script>
            </div>
          

        )
    }
}

export default bar
