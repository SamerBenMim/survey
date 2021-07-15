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
function App() {
  const firebase = useContext(FirebaseContext);
  const [userSession,setUserSession] =useState(null);
 
  
  
  return (
   // <SessoinContext.Provider value={{"name":"smer"}}>
    <BrowserRouter>
      <Switch>
        <Route  exact path = "/"  component = {Home} />
        <Route exact path = "/Login" component = {Login} myStyle="dark"/>
        <Route exact path = "/SignUp" component = {SignUp} />
        <Route exact path = "/AboutUS" component = {AboutUs}/>
        <Route exact path = "/Welcome" component = {Welcome}/>
        <Route exact path = "/Results" component = {Results}/>
        <Route exact path = "/espaceAdmin" component = {EspaceAdmin}/>
        <Route exact path = "/Loader" component = {Loader}/>

        <Route  component = {ErrorPage}/>
      </Switch>

    </BrowserRouter >
  //  </SessoinContext.Provider>

  );
};

export default App;
/*
 */