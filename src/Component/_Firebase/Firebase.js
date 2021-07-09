import app from 'firebase/app'
import 'firebase/auth'

const config = {
  
    apiKey: "AIzaSyBHnt5h6ZyQeItMD6r_CP31d-w72b4f0Bs",
    authDomain: "proxym-survey.firebaseapp.com",
    databaseURL: "https://proxym-survey-default-rtdb.firebaseio.com",
    projectId: "proxym-survey",
    storageBucket: "proxym-survey.appspot.com",
    messagingSenderId: "422345275696",
    appId: "1:422345275696:web:5a84a5b60343b3626d70f5"
  };

 class Firebase {
    constructor() {
    app.initializeApp(config)
    this.auth = app.auth() 
    }
    //inscription
    signupUser=(email,password)=>{
      return  this.auth.createUserWithEmailAndPassword(email,password);
    }
    //connexion
    loginUser=  (email,password)=>{
       return this.auth.signInWithEmailAndPassword(email,password);
    }
    //deconnexion
    signoutUser=  ()=>{
        this.auth.signOut();
    }
}

export default Firebase
