import React, {useContext,useEffect,useState} from 'react';
import {Redirect , Route , Switch,BrowserRouter} from 'react-router-dom' ;
import './App.css';
import Home from './Component/Home/Home'
import Login from './Component/Login/Login'
import SignUp from './Component/SignUp/SignUp'
import Results from './Component/quizz/results';
import AboutUs from './Component/AboutUs/AboutUs'
import Welcome from './Component/quizz/welcome';
import ErrorPage from './Component/ErrorPage/ErrorPage'
import {FirebaseContext} from './Component/_Firebase'
import SessoinContext from './Component/Session/SessionContext';
import EspaceAdmin from './Component/Questions/EspaceAdmin';
import Loader from './Component/Loader/Loader';
import bar from './Component/quizz/bar';
import StatsInfo from './Component/StatInfo/StatsInfo';
import Stats from './Component/Statistics/Stats';
import Services from './Component/services/services';
import Contactus from './Component/ContactUs/Contactus';
function App() {
  const firebase = useContext(FirebaseContext);
  const [userSession,setUserSession] =useState(null);
 

  
  return (
    <BrowserRouter>
      <Switch>
        <Route  exact path = "/"  component = {Home} />
        <Route exact path = "/Login" component = {Login} myStyle="dark"/>
        <Route exact path = "/SignUp" component = {SignUp} />
        <Route exact path = "/AboutUS" component = {AboutUs}/>
        <Route exact path = "/Welcome" component = {Welcome}  />
        <Route exact path = "/Results" component = {Results}/>
        <Route exact path = "/espaceAdmin" component = {EspaceAdmin}/>
        <Route exact path = "/Loader" component = {Loader}/>
        <Route exact path = "/Statistics" component = {Stats}/>
        <Route exact path = "/InfoStats" component = {StatsInfo}/>
        <Route exact path = "/Services" component = {Services}/>
        <Route exact path = "/ContactUs" component = {Contactus}/>
        <Route  component = {ErrorPage}/>
      </Switch>
    </BrowserRouter >

  );
};

export default App;
/*
 */