import React, { Component } from 'react'
import Navbar from '../Home/Navbar'

export class ErrorPage extends Component {
    render() {
        return (<>
            <Navbar MyClass='Navbar'/>

            <div style={{textAlign:'center'}}>
                 <h1 style={{textAlign:"center"}}>Error Page</h1>
            </div></>
        )
    }
}

export default ErrorPage
