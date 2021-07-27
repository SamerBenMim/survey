import React,{useState,useEffect,useContext} from 'react'
import RightBar from './RightBar'
import {FirebaseContext} from '../_Firebase/index'
import '../../Style/WlcPage.css'
import eventBus from '../EventBus'







export default function QuizzBox(props) {
    
    const changeClass=()=>{
    document.querySelector(".ShowHide").classList.add("display")
    document.querySelector(".doneContainer").classList.remove("display")

}

const [n,setn] =useState(0);
    const firebase = useContext(FirebaseContext);
    const[bonusMaterialSituation,setbonusMaterialSituation]=useState(0);
    const[bonusWorkingConditions,setbonusWorkingConditions]=useState(0);
    const[bonusWorkLifeBalance,setbonusWorkLifeBalance]=useState(0);
    const[bonusCareerGrowth,setbonusCareerGrowth]=useState(0);
    const[bonusRespectAndRecognition,setbonusRespectAndRecognition]=useState(0);



    const Results = {   
        userResult:{
            bonusMaterialSituation,
        bonusWorkingConditions,
        bonusWorkLifeBalance ,
        bonusCareerGrowth,
        bonusRespectAndRecognition
        },
        numberOfQuestions:n
      }


const quests=[]
const[currentQuestion,setCurrentQuestion]=useState('');
const[currentProp1,setCurrentProp1]=useState('');
const[currentProp2,setCurrentProp2]=useState('');
const[currentProp3,setCurrentProp3]=useState('');
const[currentProp4,setCurrentProp4]=useState('');
const[totalObject,setTotalObject]=useState([]);

const[currentID,setCurrentId]=useState(0);
const[endQuizz,setEndQuizz]=useState(false);
const [userUID,setUserUID] =useState('');


let listener =firebase.auth.onAuthStateChanged(user=>{  if(user)setUserUID(user.uid)})


useEffect(() => {
  
    firebase.coll('Questions')
    .get()
    .then(element=> {
      const ids=[]
      element.forEach(doc=>{
        ids.push(doc.id)
        
        const data =doc.data()
        quests.push(data)
        

      })
      setTotalObject(quests)
      if(quests[currentID]){      
        setCurrentQuestion(quests[currentID].Question.question)
        setCurrentProp1(quests[currentID].Question.prop1.text)
        setCurrentProp2(quests[currentID].Question.prop2.text)
        setCurrentProp3(quests[currentID].Question.prop3.text)
        setCurrentProp4(quests[currentID].Question.prop4.text)}
      else{
         
        changeClass()
        setEndQuizz(true)
            if(userUID){ 
           
                
                firebase.coll('users').doc(userUID).update(Results)
              ;changeClass();  }
else{alert('not goi')}

      }

    }

    )
    .catch(e=>alert(e))


}, [currentID])

const nextQuestion=(NumProp)=>{
setn(n+1)
    if(!endQuizz){
        if(NumProp===1){
            setbonusMaterialSituation(Number(bonusMaterialSituation)+Number(totalObject[currentID].Question.prop1.bonusMaterialSituation)) 
            setbonusWorkingConditions(Number(bonusWorkingConditions)+Number(totalObject[currentID].Question.prop1.bonusWorkingConditions)) 
            setbonusWorkLifeBalance(Number(bonusWorkLifeBalance)+Number(totalObject[currentID].Question.prop1.bonusWorkLifeBalance)) 
            setbonusCareerGrowth(Number(bonusCareerGrowth)+Number(totalObject[currentID].Question.prop1.bonusCareerGrowth)) 
            setbonusRespectAndRecognition(Number(bonusRespectAndRecognition)+Number(totalObject[currentID].Question.prop1.bonusRespectAndRecognition)) 
            setCurrentId(currentID+1)
        }else if(NumProp===2){
            setbonusMaterialSituation(Number(bonusMaterialSituation)+Number(totalObject[currentID].Question.prop2.bonusMaterialSituation)) 
            setbonusWorkingConditions(Number(bonusWorkingConditions)+Number(totalObject[currentID].Question.prop2.bonusWorkingConditions)) 
            setbonusWorkLifeBalance(Number(bonusWorkLifeBalance)+Number(totalObject[currentID].Question.prop2.bonusWorkLifeBalance)) 
            setbonusCareerGrowth(Number(bonusCareerGrowth)+Number(totalObject[currentID].Question.prop2.bonusCareerGrowth)) 
            setbonusRespectAndRecognition(Number(bonusRespectAndRecognition)+Number(totalObject[currentID].Question.prop2.bonusRespectAndRecognition)) 
            setCurrentId(currentID+1)        }
            else if(NumProp===3){
                setbonusMaterialSituation(Number(bonusMaterialSituation)+Number(totalObject[currentID].Question.prop3.bonusMaterialSituation)) 
                setbonusWorkingConditions(Number(bonusWorkingConditions)+Number(totalObject[currentID].Question.prop3.bonusWorkingConditions)) 
                setbonusWorkLifeBalance(Number(bonusWorkLifeBalance)+Number(totalObject[currentID].Question.prop3.bonusWorkLifeBalance)) 
                setbonusCareerGrowth(Number(bonusCareerGrowth)+Number(totalObject[currentID].Question.prop3.bonusCareerGrowth)) 
                setbonusRespectAndRecognition(Number(bonusRespectAndRecognition)+Number(totalObject[currentID].Question.prop3.bonusRespectAndRecognition)) 
                setCurrentId(currentID+1)        }
                else if(NumProp===4){
                    setbonusMaterialSituation(Number(bonusMaterialSituation)+Number(totalObject[currentID].Question.prop4.bonusMaterialSituation)) 
                    setbonusWorkingConditions(Number(bonusWorkingConditions)+Number(totalObject[currentID].Question.prop4.bonusWorkingConditions)) 
                    setbonusWorkLifeBalance(Number(bonusWorkLifeBalance)+Number(totalObject[currentID].Question.prop4.bonusWorkLifeBalance)) 
                    setbonusCareerGrowth(Number(bonusCareerGrowth)+Number(totalObject[currentID].Question.prop4.bonusCareerGrowth)) 
                    setbonusRespectAndRecognition(Number(bonusRespectAndRecognition)+Number(totalObject[currentID].Question.prop4.bonusRespectAndRecognition)) 
                    setCurrentId(currentID+1)        }
                    else if(NumProp===5){
                        setbonusMaterialSituation(Number(bonusMaterialSituation)+Number(totalObject[currentID].Question.prop5.bonusMaterialSituation)) 
                        setbonusWorkingConditions(Number(bonusWorkingConditions)+Number(totalObject[currentID].Question.prop5.bonusWorkingConditions)) 
                        setbonusWorkLifeBalance(Number(bonusWorkLifeBalance)+Number(totalObject[currentID].Question.prop5.bonusWorkLifeBalance)) 
                        setbonusCareerGrowth(Number(bonusCareerGrowth)+Number(totalObject[currentID].Question.prop5.bonusCareerGrowth)) 
                        setbonusRespectAndRecognition(Number(bonusRespectAndRecognition)+Number(totalObject[currentID].Question.prop5.bonusRespectAndRecognition)) 
                        setCurrentId(currentID+1)        }
    }

    else{
        alert('endd')
    }
}


const  SendToResults = () => {
    eventBus.dispatch("Results", Results);
  };

return (
        <div className='QuizzBox'
          >
            <div className="QuizzBoxContainer ">
                <div className="ShowHide display">
            <div className="Question"><p>{currentQuestion}</p></div>

<div className="proposision">
    <div className="blkQ1">
        <div className="prop1 button" onClick={()=>(nextQuestion(1))}  ><div  class="circle"></div><h3>{currentProp1}</h3></div>
        <div className="prop2 button"  onClick={()=>(nextQuestion(2))} ><div  class="circle"></div><h3>{currentProp2}</h3></div>
    </div>
    <div className="blkQ2">
        <div className="prop3 button" onClick={()=>(nextQuestion(3))}><div  class="circle"></div><h3>{currentProp3}</h3></div>
        <div className="prop4 button"  onClick={()=>(nextQuestion(4))}><div  class="circle"></div><h3>{currentProp4}</h3></div>
    </div>
</div>
            </div>
            </div>

            <div>
                <RightBar></RightBar>
            </div>
        </div>
    )
}


