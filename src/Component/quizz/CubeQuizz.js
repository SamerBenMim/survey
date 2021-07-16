import React,{useState} from 'react'
import img from '../../assets/quizz.png'
import shadow from '../../assets/shadow.png'

import '../../Style/WlcPage.css'
export default function CubeQuizz() {
    const [Class,currentClass] =useState('');
    const changeClass=()=>{
        document.querySelector(".cubeContainer").classList.add("display") 
        document.querySelector(".ShowHide").classList.remove("display") 
        document.querySelector(".h1").classList.add("display")   }
    return (
        <div className="startQuiz" >
            <h1 class="h1">Open The Box to Start The Quiz</h1>
            <div className ="cubeContainer">
             <div className="cubeInnerContainer"><img src={img} alt = 'img' className="cube" onClick={changeClass}  /> </div>
             <img src={shadow} alt = 'img' className="shadow"/>              
            </div>
        
        </div>
        
    )
}
