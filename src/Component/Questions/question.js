import React, { useState,useContext,useEffect } from 'react';
import {FirebaseContext} from '../_Firebase/index'

const Question = () => {
const firebase = useContext(FirebaseContext);
const [id, setId] = useState([]); 
const[question,setQuestion]=useState('');
const[nbrOfQuestion,setnbrOfQuestion] = useState(0);

const handleSubmit = e => {
  setnbrOfQuestion(0)

  e.preventDefault();

  firebase.addquestion(nbrOfQuestion+1).set({

    'Question':question

  })


  const quests = []
            firebase.coll('Questions')
            .get()
            .then(element=> {
              const ids=[]
              element.forEach(doc=>{
                
                ids.push(doc.id)
                // ids.push(doc.id)
                // console.log(ids)
                const data =doc.data()
                quests.push(data)
               // console.log(quests)
              })
              setId(ids)
              console.log(id)
        setnbrOfQuestion(quests.length)
        
            }
        
            )
            .catch(e=>alert(e))
        

    

}

 
    





useEffect(()=>{

  const quests = []
            firebase.coll('Questions')
            .get()
            .then(element=> {
              const ids=[]

              element.forEach(doc=>{
                ids.push(doc.id)
           const data =doc.data()
                quests.push(data)
                console.log(ids)
              })
              setId(ids)
              console.log(id)
        setnbrOfQuestion(quests.length)
            }
            )
            .catch(e=>alert(e))    
},[])


    return (
        <div>
              <h1 style={{textAlign:'center'}}> nbrof questions :          {nbrOfQuestion} {id[0]}
</h1>
               <div>
               <form onSubmit={handleSubmit} className="box-container">
                 <input required autoComplete='off' 
                 onChange={e=>{
                   setQuestion(e.target.value)
                  }
                  }
                 className="input1" type = "text" placeholder = "The question" ></input>
                 <input  className="submit"type = "submit" value = "login" name=""></input>

                </form>
            </div>
        </div>
    )

}



export default Question
