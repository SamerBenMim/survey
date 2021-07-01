import React from 'react';
import {Redirect , Route , Switch,BrowserRouter} from 'react-router-dom' ;
import './App.css';
import Home from './Component/Home/Home'
import Login from './Component/Login/Login'
import SignUp from './Component/SignUp/SignUp'
import ErrorPage from './Component/ErrorPage/ErrorPage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route  exact path = "/"  component = {Home} />
        <Route exact path = "/Login" component = {Login}/>
        <Route exact path = "/SignUp" component = {SignUp}/>
        <Route  component = {ErrorPage}/>
      </Switch>

    </BrowserRouter >
  );
};

export default App;
/*
 */