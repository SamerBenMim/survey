import React from 'react';
import {Redirect , Route , Switch,BrowserRouter} from 'react-router-dom' ;
import './App.css';
import Home from './Component/Home/Home'
import Login from './Component/Login/Login'
import SignUp from './Component/SignUp/SignUp'
import ErrorPage from './Component/ErrorPage/ErrorPage'
import AboutUs from './Component/AboutUs/AboutUs'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route  exact path = "/"  component = {Home} />
        <Route exact path = "/Login" component = {Login} myStyle="dark"/>
        <Route exact path = "/SignUp" component = {SignUp}/>
        <Route exact path = "/AboutUS" component = {AboutUs}/>

        <Route  component = {ErrorPage}/>
      </Switch>

    </BrowserRouter >
  );
};

export default App;
/*
 */