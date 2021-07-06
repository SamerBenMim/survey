import React, { Component } from 'react'
import Navbar from '../Home/Navbar'
import Img404 from './img404'
import ErrorText from './errorText'
import '../../Style/ErrorPage.css'
export class ErrorPage extends Component {
    render() {
        return (
        <>
            <Navbar MyClass="Navbar" mode="dark"/>
            <div className='contaire'>
            <ErrorText></ErrorText>
            <Img404></Img404>
            
            </div>
        </>
        )
    }
}

export default ErrorPage
