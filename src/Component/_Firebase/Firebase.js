import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
const admin = require('firebase-admin');

const config = {
  
  apiKey: "AIzaSyAkknbQ23Vi8qrhTGTud4381X5IrFTsDIo",
  authDomain: "proxym-7b2c8.firebaseapp.com",
  projectId: "proxym-7b2c8",
  storageBucket: "proxym-7b2c8.appspot.com",
  messagingSenderId: "59253182031",
  appId: "1:59253182031:web:fa130103aa127ef6c3a43a"
  };





 class Firebase {
    constructor() {
    app.initializeApp(config)
    this.auth = app.auth() 
    this.db= app.firestore();
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


    adduser=  (uid)=>{
       return this.db.doc(`users/${uid}`);
  }
  addquestion=  (Qid)=>{
    return this.db.doc(`Questions/${Qid}`);
}
  coll = (collection)=>{
    return this.db.collection(`${collection}`)
  };

// recupere mdp

passwordReset=(email)=>{
return this.auth.sendPasswordResetEmail(email)
}
}/*
export class Admin{
  constructor() {
    admin.initializeApp();    this.auth = admin.auth() 
    this.db= admin.firestore();
    }

 fn(){
    admin
    .auth()
    .getUserByEmail('admin@admin.admin')
    .then((user) => {console.log('enfin')
      if (user.emailVerified) {
        return admin.auth().setCustomUserClaims(user.uid, {
          admin: true,
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });

}
}
*/

export default Firebase
