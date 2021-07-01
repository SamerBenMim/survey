import React, { Component } from 'react'
import '../../Style/HomeStyle.css'
import go from'../../assets/go.png'
import DynamicText from './DynamicText'

export class Text extends Component {
    state={
        color: 'red'
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
                <p >Veniam nisi occaecat ad non ex aliquip ea incididunt irure labore laborum. Incididunt veniam consectetur elit ullamco ipsum pariatur aliquip nisi voluptate laboris non aliqua. Irure ex est deserunt nostrud sunt officia sit ipsum consectetur consequat proident cillum consequat pariatur.</p>
                <div>
                <button style= {{ cursor:"pointer", backgroundColor: this.state.color}} onMouseEnter={this.changeColor} onMouseLeave={this.changeColor}>Read More</button>
                <img src={go} alt ="go" className="go" /> <a className="try" >START NOW</a>
                </div>
            
            </div>
        )
    }
}

export default Text
