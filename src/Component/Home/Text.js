import React, { Component } from 'react'
import '../../Style/HomeStyle.css'
import go from'../../assets/go.png'
import { NavLink } from 'react-router-dom'
import DynamicText from './DynamicText'
export class Text extends Component {
    
   constructor(props) {
       super(props)
   
   }
   
     
    state={
        color: 'red',
        popup:false
    }
    chState=()=>{
        this.setState({
            popup:true
        })
    }
    changeColor=()=>{
        this.state.color !=="red"? (  this.setState({
           color:'red'
        })):( this.setState({
           color:"#ba0000"
        }))
       
    }
  
    render() {
        return (
            <div className="box">
                <h1> Work life  <DynamicText/></h1>
                {//Aim of this questionnaire is to study determinants and their effects on work and personal life​ ...

                }
                <p > Being satisfied with your work is extremely important. If we don’t like our job or if we are not satisfied with some segments of our work, such as the working atmosphere, people with whom we work, etc., that dissatisfaction can have a strong negative effect on our personal life.</p>
               
                <div  >
                <button  onClick={this.props.methode}  style= {{ cursor:"pointer", backgroundColor: this.state.color}} onMouseEnter={this.changeColor} onMouseLeave={this.changeColor}>Read More</button>
                <div className="GOnow"><img src={go} alt ="go" className="go" />
                 <NavLink to='/Login' className="try" >START NOW </NavLink>
                 </div>

                
                </div>
            
            </div>
        )
    }
}

export default Text
