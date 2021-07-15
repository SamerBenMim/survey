import React,{useState,useEffect,useContext} from 'react'
import RightBar from './RightBar'
import {FirebaseContext} from '../_Firebase/index'

export default function QuizzBox(props) {
    

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
        }
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
let listener =firebase.auth.onAuthStateChanged(user=>{  setUserUID(user.uid)})
useEffect(() => {
console.log(userUID)

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

       alert('fin de quiz')
        setEndQuizz(true)
        console.log(userUID)
            if(userUID){    firebase.coll('users').doc(userUID).update(Results)
            alert('finally')    }
else{alert('not goi')}

      }

    }

    )
    .catch(e=>alert(e))
}, [currentID])

const nextQuestion=(NumProp)=>{

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
console.log(Results)
return (
        <div className='QuizzBox'>

            <div>
            <div className="Question"><p>Excepteur dolor sint ullamco sint consequat ullamco ea.Et est anim id minim fugiat magna eu excepteur sit anim in occaecat et.Anim exercitation culpa exercitation proident aliqua culpa nulla anim adipisicing excepteur ut nisi laboris.</p></div>

<div className="proposision">
    <div className="blkQ1">
        <div className="prop1 button" onClick={()=>(nextQuestion(1))}><div  class="circle"></div><h3>{currentProp1}</h3></div>
        <div className="prop2"  onClick={()=>(nextQuestion(2))} >{currentProp2}</div>
    </div>
    <div className="blkQ2">
        <div className="prop3" onClick={()=>(nextQuestion(3))}>{currentProp3}</div>
        <div className="prop4"  onClick={()=>(nextQuestion(4))}>{currentProp4}</div>
    </div>
</div>
            </div>

            <div>
                <RightBar></RightBar>

            </div>
           
        </div>
    )
}
