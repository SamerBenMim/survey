import React from 'react'
import Barr from '../quizz/bar'
import '../../Style/contactUs.css'
import imgee from '../../assets/Cus.svg'

export default function Contactus() {
    return (
        <div >
            <Barr></Barr>
            <div className="CusContainer">
            <img src={imgee} alt = 'img' className="imgee"/>            

            </div>
            <div className="CusText">
                <div className="europe"><h3 style={{color:'#e76a4a'}}>Europe</h3>
                <br></br>                <br></br>

                <p>144 Boulevard Voltaire -75011 Paris-France</p>
                <p>Phone : +33 1 85 08 05 45</p>
                <p>Email: contact@proxym-france.com</p></div>
                <div className="middleEast">                 
<h3 style={{color:'#e76a4a'}}>Middle East</h3>
<br></br>
                <br></br>                <br></br>

                <p>offices: A002-A037 - Concorde Tower</p>
                <p>Media City -Dubai- United Arab Emirates</p></div>
                <div className="Africa">  <h3 style={{color:'#e76a4a'}}>Africa</h3>
                <br></br>

                <p>Technopole de Sousse 4051 - Tunsie</p>
                <p>Email : contact@proxym-group.com</p>
                <p>Phone: +216 36 01 50 50</p>
                <p>Fax : +216 36 01 50 51</p></div>
              
             </div>
        </div>
    )
}
