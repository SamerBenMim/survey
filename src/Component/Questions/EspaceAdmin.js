import React, { useState,useContext,useEffect } from 'react';
import {FirebaseContext} from '../_Firebase/index'
import '../../Style/Admin.css'
import admin from '../../assets/icon-administrateur-protection-personnes-departemantale-associations-familiales-copie.png'
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component'
import AdminLogout from '../Logout.js/AdminLogout';
import Loader from '../Loader/Loader';
const EspaceAdmin = (props) => {
  
 const [userSession,setUserSession] =useState(null);
    const fb= useContext(FirebaseContext);
    const [isAdmin,setIsAdmin] =useState(false);

     useEffect(() => {
        let listener =fb.auth.onAuthStateChanged(user=>{
            user? setUserSession(user):props.history.push('/Login')
            if(user)
            if( user.uid!=='XwwwxAp18nZ03kCsTCM5fNXUu512'){
              setTimeout(() => {
                props.history.push('/Welcome');

              }, 2000);
             }else{
              setIsAdmin(true)
             }
        }); 
       return ()=>{
           listener()
       }
     }, [isAdmin] )


  

const firebase = useContext(FirebaseContext);
const [id, setId] = useState([]); 
const [element, setElement] = useState([]); 
const [deletedQuestion, setDeletedQuestion] = useState(''); 

const[nbrOfQuestion,setnbrOfQuestion] = useState(0);
const[nbrOfUSers,setNbrOfUSers] = useState(0);


const[question,setQuestion]=useState('');
const[prop1,setProp1]=useState('');
const[prop2,setProp2]=useState('');
const[prop3,setProp3]=useState('');
const[prop4,setProp4]=useState('');

const[MS1,setMS1]=useState(0);
const[MS2,setMS2]=useState(0);
const[MS3,setMS3]=useState(0);
const[MS4,setMS4]=useState(0);

const[WB1,setWB1]=useState(0);
const[WB2,setWB2]=useState(0);
const[WB3,setWB3]=useState(0);
const[WB4,setWB4]=useState(0);

const[WC1,setWC1]=useState(0);
const[WC2,setWC2]=useState(0);
const[WC3,setWC3]=useState(0);
const[WC4,setWC4]=useState(0);

const[RR1,setRR1]=useState(0);
const[RR2,setRR2]=useState(0);
const[RR3,setRR3]=useState(0);
const[RR4,setRR4]=useState(0);

const[CG1,setCG1]=useState(0);
const[CG2,setCG2]=useState(0);
const[CG3,setCG3]=useState(0);
const[CG4,setCG4]=useState(0);


const generateID=()=>{
for( let i =1;i <=50 ;i++){
  if(!id.includes( "Q"+i))
  return "Q"+i ;

}
}


const blkQuestion = {
  question:question,
  prop1:{text:prop1 , bonusMaterialSituation:MS1, bonusWorkLifeBalance:WB1,bonusRespectAndRecognition:WC1,bonusWorkingConditions:RR1,bonusCareerGrowth:CG1},
  prop2:{text:prop2 , bonusMaterialSituation:MS2, bonusWorkLifeBalance:WB2,bonusRespectAndRecognition:WC2,bonusWorkingConditions:RR1,bonusCareerGrowth:CG1},
  prop3:{text:prop3 , bonusMaterialSituation:MS3, bonusWorkLifeBalance:WB3,bonusRespectAndRecognition:WC3,bonusWorkingConditions:RR1,bonusCareerGrowth:CG1},
  prop4:{text:prop4 , bonusMaterialSituation:MS4, bonusWorkLifeBalance:WB4,bonusRespectAndRecognition:WC4,bonusWorkingConditions:RR1,bonusCareerGrowth:CG1},
 id:''
}
const[objectQuestion,setObjectQuestion] = useState({});
const[objectTab,setObjectTab] = useState([]);

const handleSubmit = e => {

  e.preventDefault();
if(CG1>100 || CG1 <0 || isNaN(CG1) || CG2>100 || CG2<0 || isNaN(CG2) || CG3>100 || CG3 <0 || isNaN(CG3) || CG4>100 || CG4 <0 || isNaN(CG4)
||RR1>100 || RR1 <0 || isNaN(RR1) || RR2>100 || RR2<0 || isNaN(RR2) || RR3>100 || RR3 <0 || isNaN(RR3) || RR4>100 || RR4 <0 || isNaN(RR4)
||WC1>100 || WC1 <0 || isNaN(WC1) || WC2>100 || WC2<0 || isNaN(WC2) || WC3>100 || WC3 <0 || isNaN(WC3) || WC4>100 || WC4 <0 || isNaN(WC4)
||WB1>100 || WB1 <0 || isNaN(WB1) || WB2>100 || WB2<0 || isNaN(WB2) || WB3>100 || WB3 <0 || isNaN(WB3) || WB4>100 || WB4 <0 || isNaN(WB4)
||MS1>100 || MS1 <0 || isNaN(MS1) || MS2>100 || MS2<0 || isNaN(MS2) || MS3>100 || MS3 <0 || isNaN(MS3) || MS4>100 || MS4 <0 || isNaN(MS4)


){ echecNotif() } 
else{
  setnbrOfQuestion(0)

  let uid = generateID()
  blkQuestion.id=uid
   firebase.addquestion(uid).set({

     'Question':blkQuestion

   }).then(successNotif 
    ).catch(e=>alert(e))
    setTimeout(() => {
      window.location.reload(false);
  
    }, 1500);
  console.log(prop1)
  console.log(blkQuestion)

  const quests = []
 
            firebase.coll('Questions')
            .get()
            .then(element=> {
              const ids=[]
              element.forEach(doc=>{
                ids.push(doc.id)
                
                const data =doc.data()
                quests.push(data)
               console.log(quests)

              })
              setId(ids)
              console.log(id)
        setnbrOfQuestion(quests.length)
        
            }
        
            )
            .catch(e=>alert(e))
        

    

}}

const deletehandleSubmit =(e)=>{
  e.preventDefault()
if(!id.includes(String(deletedQuestion))){  noId()}
else{ 
  firebase.coll('Questions').doc(deletedQuestion).delete().then(() => {
    successDeleteNotif()
  setTimeout(() => {
    window.location.reload(false);

  }, 1500);

}).catch((error) => {
  console.error("Error removing document: ", error);
})}
}
    





useEffect(()=>{
  const docs = []
  const quests = []
  const users = []

            firebase.coll('Questions')
            .get()
            .then(element=> {
              setElement(element)
              const ids=[]
              console.log(element)
              element.forEach(doc=>{
                ///console.log(doc.data())
                ids.push(doc.id)
           const data =doc.data()
                quests.push(data)
               
             //   console.log(ids)
              })
              setObjectQuestion(quests)
              setId(ids)
              setObjectTab(objectQuestion);

        setnbrOfQuestion(quests.length)
            }
            )
            .catch(e=>alert(e)) 
            
            
            firebase.coll('users')
            .get()
            .then(element=> {

              element.forEach(doc=>{
           const data =doc.data()
                users.push(data)
              })
            
              setNbrOfUSers(users.length)
            }
            )
            .catch(e=>alert(e))    
},[])
console.log(typeof(objectTab))
const monId = []
const monQuestion = []
// console.log((t[0][0].Question))

 Object.values(objectQuestion).forEach(item => {monId.push(item.Question.id)  
  monQuestion.push(item.Question.question)})



const listIds = monId.map((id) =>
  <p>{id}</p>
);
const listQuestions = monQuestion.map((q) =>
  <p>{q} </p>
);



if(isAdmin)
    return (
      
        <div style={{background:'#2a2b33',height: 'auto'}}> 
         <ReactNotification />
        <div className="topnav"><img src={admin} alt = 'admin' className="admin"/> 
        <h1>Welcome Admin

        <h2>In this page you can add, delete or modify any question in the survey</h2>
        </h1>
        <div>
        <p className='stats' style={{textAlign:'left' }}> Number of questions : {nbrOfQuestion} </p>
        <p className='stats' style={{textAlign:'left'}}> Number of participants : {nbrOfUSers} </p>
        </div>
        
        </div>

              
               <div>
               <form onSubmit={handleSubmit} className="admin-box-container">
                 {/*question/*/}
                 <h1>Add Questions</h1>
                 <div>                 <p> <span>Important !</span> :Ea magna exercitation esse ea quis sunt officia minim magna cupidatat laborisEa magna exercitation esse ea quis sunt officia minim magna cupidatat laboris.Ea magna exercitation esse ea quis sunt officia minim magna cupidatat laboris. Ea magna exercitation esse ea quis sunt officia minim magna cupidatat laboris.</p>
                </div>
                 <div className = 'blk1'>
                 <input 
                 required
                 id='question'
                  autoComplete='off' 
                 onChange={e=>{

                  setQuestion(e.target.value)
                  }
                  }
                 className="admin-input1" type = "text"  placeholder = "Write the question here " ></input>
                  </div>
                 {/*props/*/}

                  <div className = 'blk2'>
                 <input 
                 required
                 id='prop1'
                  autoComplete='off' 
                 onChange={e=>{
                   setProp1(e.target.value)
                  }
                  }
                 className="admin-input2" type = "text"  placeholder = "Enter the first proposition " >
                 </input>

                  <input  autoComplete='off' 
                                   id='prop2'
                                   required
                 onChange={e=>{
                  setProp2(e.target.value)
                }
                  }
                 className="admin-input2" type = "text"  placeholder = "Enter the second proposition  " >
                 </input>
                 <input
                                  id='prop3'
                                   autoComplete='off' 
                 onChange={e=>{
                  setProp3(e.target.value)
                }
                  }
                 className="admin-input2" type = "text" required placeholder = "Enter the third proposition" >
                 </input>
                 <input required
                                  id='prop4'
                                   autoComplete='off' 
                 onChange={e=>{
                  setProp4(e.target.value)
                }
                  }
                 className="admin-input2" type = "text"  placeholder = "Enter the forth proposition" >
                 </input>  
                  </div>  



                  {/* bonus 1*/}
                  <div className = 'blk2'>
                 <input  autoComplete='off' 
                 
                 onChange={e=>{
                   setMS1(e.target.value)
                  }
                  }
                 className="admin-input3" type = "text" required placeholder = "MS %" >
                 </input>

                  <input  autoComplete='off'  
                 onChange={e=>{
                  setMS2(e.target.value)
                }
                  }
                 className="admin-input3" type = "text" required placeholder = "MS %">
                 </input>
                 <input  autoComplete='off' 
                 onChange={e=>{
                  setMS3(e.target.value)
                }
                  }
                 className="admin-input3" type = "text" required placeholder = "MS %" >
                 </input>
                 <input  autoComplete='off' 
                 onChange={e=>{
                  setMS4(e.target.value)
                }
                  }
                 className="admin-input3" type = "text" required placeholder = "MS %" >
                 </input>  
                  </div> 


                   {/* bonus 2*/}
                   <div className = 'blk2'>
                 <input  autoComplete='off' 
                 onChange={e=>{
                  setWB1(e.target.value)
                }
                  }
                 className="admin-input3" type = "text" required placeholder = "WB %" >
                 </input>

                  <input  autoComplete='off' 
                 onChange={e=>{
                   setWB2(e.target.value)
                  }
                  }
                 className="admin-input3" type = "text" required placeholder = "WB %" >
                 </input>
                 <input  autoComplete='off' 
                 onChange={e=>{
                  setWB3(e.target.value)                  }
                  }
                 className="admin-input3" type = "text" required placeholder = "WB %" >
                 </input>
                 <input  autoComplete='off' 
                 onChange={e=>{
                  setWB4(e.target.value)                  }
                  }
                 className="admin-input3" type = "text" required placeholder = "WB %" >
                 </input>  
                  </div>

                  {/* bonus 3*/}
                  <div className = 'blk2'>
                 <input  autoComplete='off' 
                 onChange={e=>{
                   setRR1(e.target.value)
                  }
                  }
                 className="admin-input3" type = "text" required placeholder = 'R&R %'  >
                 </input>

                  <input  autoComplete='off' 
                 onChange={e=>{
                  setRR2(e.target.value)
                }
                  }
                 className="admin-input3" type = "text" required placeholder = 'R&R %' >
                 </input>
                 <input  autoComplete='off' 
                 onChange={e=>{
                  setRR3(e.target.value)
                }
                  }
                 className="admin-input3" type = "text" required placeholder = 'R&R %' >
                 </input>
                 <input  autoComplete='off' 
                 onChange={e=>{
                  setRR4(e.target.value)
                }
                  }
                 className="admin-input3" type = "text" required placeholder = 'R&R %' >
                 </input>  
                  </div>

                   {/* bonus 1*/}
                   <div className = 'blk2'>
                 <input  autoComplete='off' 
                 onChange={e=>{
                  setWC1(e.target.value)
                }
                  }
                 className="admin-input3" type = "text" required placeholder = 'WC %' >
                 </input>

                  <input  autoComplete='off' 
                 onChange={e=>{
                   setWC2(e.target.value)
                  }
                  }
                 className="admin-input3" type = "text" required placeholder = 'WC %' >
                 </input>
                 <input  autoComplete='off' 
                 onChange={e=>{
                  setWC3(e.target.value)
                }
                  }
                 className="admin-input3" type = "text" required placeholder = 'WC %' >
                 </input>
                 <input  autoComplete='off' 
                 onChange={e=>{
                  setWC4(e.target.value)
                }
                  }
                 className="admin-input3" type = "text" required placeholder = 'WC %' >
                 </input>  
                  </div>


                   {/* bonus 1*/}
                   <div className = 'blk2'>
                 <input  autoComplete='off' 
                 onChange={e=>{
                  setCG1(e.target.value)
                }
                  }
                 className="admin-input3" type = "text" required placeholder = "CG %" >
                 </input>

                  <input  autoComplete='off' 
                 onChange={e=>{
                  setCG2(e.target.value)
                }
                  }
                 className="admin-input3" type = "text" required placeholder = "CG %" >
                 </input>
                 <input  autoComplete='off' 
                 onChange={e=>{
                  setCG3(e.target.value)
                }
                  }
                 className="admin-input3" type = "text" required placeholder = "CG %" >
                 </input>
                 <input  autoComplete='off' 
                 onChange={e=>{
                   setCG4(e.target.value)
                  }
                  }
                 className="admin-input3" type = "text" required placeholder = "CG %" >
                 </input>  
                  </div>


                 <input  className="submit"type = "submit" value = "ADD" name=""></input>

                </form>
            </div >
       
                <div style={{    height: '700px'}}>
                <form onSubmit={deletehandleSubmit} style={{marginTop:'80px'}} className="admin-box-container">
                 {/*question/*/}
                 <h1>Delete a Question</h1>
                 <div>                 <p> <span>Important !</span> :Ea magna exercitation esse ea quis sunt officia minim magna cupidatat laborisEa magna exercitation esse ea quis sunt officia minim magna cupidatat laboris.Ea magna exercitation esse ea quis sunt officia minim magna cupidatat laboris. Ea magna exercitation esse ea quis sunt officia minim magna cupidatat laboris.</p>
                </div>

                <div style={{display: "inline-flex"}}>


                
<div style={{marginLeft: '-470px'}}>
<input  autoComplete='off' 
                 onChange={e=>{
                   setDeletedQuestion(e.target.value)
                   console.log(deletedQuestion)
                }
                  }
                 className="admin-input3" type = "text" required placeholder = "Enter the id (ex Q15)" id='admin-input3'>
                 </input>

                <input id='delete-button' className="submit"type = "submit" value = "Delete" name=""></input>

</div>
<div style={{display:"flex" ,color:'white'     ,marginLeft: '134px'
    ,marginTop : '21px'}} > <div style={{marginRight:'20px' ,fontSize:'25px'}} >{listIds} </div><div style={{fontSize:'25px'}}>{listQuestions}</div></div>

</div>    

                </form>
                </div>
                <AdminLogout ></AdminLogout>

        </div>
    )
    else{
      return <Loader></Loader>
    }

}

 function successNotif( ){

  store.addNotification({
      width:600,
  
  title:'Success',
  message:'New Question added',
  type : 'success',
  container:'top-right',
  insert:'top',
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"],
  dismiss: {
      duration:2000
  }
      })
  }


  function successDeleteNotif( ){

    store.addNotification({
        width:600,
    
    title:'Success',
    message:'The question was successfully deleted',
    type : 'success',
    container:'top-right',
    insert:'top',
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
        duration:2000
    }
        })
    }
  function echecNotif( ){

    store.addNotification({
        width:600,
    
    title:'Error',
    message:'The bonus field should be an integer between 0 & 100',
    type : 'danger',
    container:'top-right',
    insert:'top',
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
        duration:2000
    }
        })
    }

    function noId( ){

      store.addNotification({
          width:600,
      
      title:'Error',
      message:'The id does not exist',
      type : 'danger',
      container:'top-right',
      insert:'top',
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
          duration:2000
      }
          })
      }

export default EspaceAdmin
