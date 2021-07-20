import React, { useState,useContext,useEffect } from 'react';
import {FirebaseContext} from '../_Firebase/index'
import Stats from './Stats';
import Results from '../quizz/results';
// export default function Parent() {

//     const firebase = useContext (FirebaseContext);
//     const [datas,setData] =useState([]);
//     // useEffect(() => {
//     //     var quests = []
     
    
//     //         firebase.coll('users')
//     //         .get()
//     //         .then(element=> {
//     //           element.forEach(doc=>{
//     //             const data =doc.data()
//     //             quests.push(data)
//     //             console.log(quests)
//     //           });
//     //         }           , setData(quests)

//     //         )
//     //         .catch(e=>alert(e))

//     // },[] )










//     return (
//         <div>
//             <Results samer="samer" prop={datas[2].userResult.bonusMaterialSituation}/>
//             <Stats>azazazaaza<Stats/>
//         </div>
//     )
// }

function parent() {
    return (
        
            <Results samer = "samer"></Results>
        
    )
}

export default parent
