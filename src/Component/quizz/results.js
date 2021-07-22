import React, { useState,useContext,useEffect } from 'react'
import Logout from '../Logout.js/logout'
import {FirebaseContext} from '../_Firebase/index'
import SessoinContext from '../Session/SessionContext'
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'animate.css'
import "animate.css/animate.min.css";
import Barr  from '../quizz/bar'
import '../../Style/bar.css'
import Loader from '../Loader/Loader'
import { Bar,line ,Pie } from  'react-chartjs-2';
import '../../Style/Results.css'

import parent from '../Statistics/parent'
import { user } from 'firebase-functions/lib/providers/auth'
const Results = (props) => {
    const firebase = useContext(FirebaseContext);
    const [userSession,setUserSession] =useState(null);
    const [userEmail,setUserEmail] =useState('');
    const [datas,setData] =useState([]);
    const [SalarySatisfaction,setSalarySatisfaction] =useState(0);
    const [WorkConditions,setWorkConditions] =useState(0);
    const [Respect,setRespect] =useState(0);
    const [WorkLifeBalance,setWorkLifeBalance] =useState(0);
    const [Challenges,setChallenges] =useState(0);
    const [numberofusers,setnumberofusers] =useState(0);
    const [n,setn] =useState(0);
    const [done,setdone] =useState(false);
    // const [SalarySatisfaction,setSalarySatisfaction] =useState(10);
    const [loading, setLoading] = useState(true);

       const loadContent1 = ()=>{ 
        setSalarySatisfaction(100)
       setWorkConditions(10)
       setRespect(10)
       setWorkLifeBalance(100)
       setChallenges(100)
   
   }
   async function anyNameFunction1() {
       await loadContent1();
     }
       



    const percents = []
useEffect(() => {     anyNameFunction1()

    let listener =firebase.auth.onAuthStateChanged(user=>{
        user? setUserSession(user) :props.history.push('/Login')
        setUserEmail(user.email)
 })
  
        
        firebase.coll('users')
    .get()
    .then(element=> {
      element.forEach(doc=>{ 
        const data =doc.data()
        if(data.email === userEmail){
            console.log("data",data.numberOfQuestions)
           
            const loadContent = ()=>{ 
                 setSalarySatisfaction(data.userResult.bonusMaterialSituation)
                setWorkConditions(data.userResult.bonusWorkingConditions)
                setRespect(data.userResult.bonusRespectAndRecognition)
                setWorkLifeBalance(data.userResult.bonusWorkLifeBalance)
                setChallenges(data.userResult.bonusCareerGrowth)
            setn(data.numberOfQuestions)
            }
            async function anyNameFunction() {
                await loadContent();
              }
                
              anyNameFunction()
                    // return await fn()
              
             
                 
                 
                
             
             
           
        }
        
        else{console.log('no')}
        // percents.push(data)

      },
            )
    }
    
    )
    .catch(e=>{})
    
//    return()=>{
//     const loadContent1 = ()=>{ 
//         setSalarySatisfaction(0)
//        setWorkConditions(0)
//        setRespect(0)
//        setWorkLifeBalance(0)
//        setChallenges(0)
   
//    }
//    async function anyNameFunction1() {
//        await loadContent1();
//      }
       
//      anyNameFunction1()
//    }
setTimeout(() => {
    setLoading(false)
 }, 1000)
}, [userEmail])
//setTimeout(() => {
const s =  <span>Personal Satisfaction Rate<span style={{color:'red'}}>{(SalarySatisfaction+Challenges+WorkConditions+Respect+WorkLifeBalance )/(5*n)}</span> </span> 
 console.log(s)   
if(userSession&&!loading)
     
        return ( 
            
            <div>
            
            <Barr></Barr>
            <div className ="PieContainer">
            <Pie 
          
                           
                           options = {{
                            datalabels: {
                                display: true,
                                color: "white",
                              },
                            plugins: {
                                title: {
                                    font: {
                                        size: 20
                                    },
                                    display: true,
                                    text: ` Personal Satisfaction Rate (${(SalarySatisfaction+Challenges+WorkConditions+Respect+WorkLifeBalance)/(5*n)} %)`,
                                    padding: {
                                        top: 20,
                                        bottom: 40
                                    },
                                   
                                },
                                legend: {
                                    labels: {
                                        font: {
                                            size: 19
                                        },
                                        // padding:{
                                        //     top:.1
                                        // },
                                    },
                                    
                                }
                            },
                
                
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero:true,
                                      
                                    }
                                }],
    
    
                                // y: {
                                //     label :'tdf',
                                //     max: 100,
                                // },
                                
                            }
                        }}
                  width={500}
                  height={491}
                data={{
                    labels: ['Satisfied', 'Not Satisfied'],
                    datasets: [{
                        label: 'Satisfaction Rate (%)' ,
                        
                      
                        data: [
                            (SalarySatisfaction+Challenges+WorkConditions+Respect+WorkLifeBalance)/(5*n)
                            ,
                          100-(SalarySatisfaction+Challenges+WorkConditions+Respect+WorkLifeBalance)/(5*n)
                        ],
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            // 'rgba(255, 206, 86, 0.2)',
                            // 'rgba(75, 192, 192, 0.2)',
                            // 'rgba(153, 102, 255, 0.2)',
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 10)',
                            'rgba(255, 99, 132, 10)',
                            
                        ],
                        borderWidth:1
    
                    }],
                
                      
                   
                }
            
            
            }
         
           
                
                />
            </div>
            <div className="blockPieContainer">
                <h1>Job Satisfaction By Category</h1>
            <div className="blockPie">
                <div className="Pie1 Pie">
                <Pie 
          
                           
          options = {{
           datalabels: {
               display: true,
               color: "white",
             },
           plugins: {
               title: {
                   font: {
                       size: 15
                   },
                   display: true,
                   text:` Salary Satisfaction Rate (${(SalarySatisfaction/n)} %)`,
              
                  
               },
               legend: {
                display: false,
                   labels: {
                       // This more specific font property overrides the global property
                       font: {
                           size: 19
                       },
                       // padding:{
                       //     top:.1
                       // },
                       backgroundColor:["yellow"],
                   },
                   
               }
           },


           responsive: true,
           maintainAspectRatio: false,
  
       }}
 width={500}
 height={491}
data={{
   labels: ['Satisfied', 'Not Satisfied'],
   datasets: [{
       label: 'Satisfaction Rate (%)' ,
       
     
       data: [
           (SalarySatisfaction+Challenges+WorkConditions+Respect+WorkLifeBalance)/(5*n)
           ,
         100-(SalarySatisfaction+Challenges+WorkConditions+Respect+WorkLifeBalance)/(5*n)
       ],
       backgroundColor: [
           'rgba(54, 162, 235, 0.2)',
           'rgba(255, 99, 132, 0.2)',
          
       ],
       borderColor: [
           'rgba(54, 162, 235, 10)',
           'rgba(255, 99, 132, 10)',
         
       ],
       borderWidth:1

   }],

     
  
}


}



/>
                </div>
                <div className="Pie2 Pie">
                <Pie 
          
                           
          options = {{
           datalabels: {
               display: true,
               color: "white",
             },
           plugins: {
               title: {
                   font: {
                       size: 15
                   },
                   display: true,
                   text: ` Working conditions & Security Satisfaction  (${WorkConditions/n} %)`,
              
                  
               },
               legend: {
                display: false,
                   labels: {
                       // This more specific font property overrides the global property
                       font: {
                           size: 19
                       },
                       // padding:{
                       //     top:.1
                       // },
                       backgroundColor:["yellow"],
                   },
                   
               }
           },


           responsive: true,
           maintainAspectRatio: false,
    //        scales: {
    //            yAxes: [{
    //                ticks: {
    //                    beginAtZero:true,
                     
    //                }
    //            }],


    //            // y: {
    //            //     label :'tdf',
    //            //     max: 100,
    //            // },
               
    //        }
        }}
 width={500}
 height={491}
data={{
   labels: ['Satisfied', 'Not Satisfied'],
   datasets: [{
       label: 'Satisfaction Rate (%)' ,
       
     
       data: [
        WorkConditions/n
           ,
         100-WorkConditions/n
       ],
       backgroundColor: [
           'rgba(54, 162, 235, 0.2)',
           'rgba(255, 99, 132, 0.2)',
          
       ],
       borderColor: [
           'rgba(54, 162, 235, 10)',
           'rgba(255, 99, 132, 10)',
         
       ],
       borderWidth:1

   }],

     
  
}


}



/>
                </div>
                <div className="Pie3 Pie">
                <Pie 
          
                           
          options = {{
           datalabels: {
               display: true,
               color: "white",
             },
           plugins: {
               title: {
                   font: {
                       size: 15
                   },
                   display: true,
                   text: ` Work Life Balance Satisfaction (${(WorkLifeBalance)/n} %)`,
              
                  
               },
               legend: {
                display: false,
                   labels: {
                       // This more specific font property overrides the global property
                       font: {
                           size: 19
                       },
                       // padding:{
                       //     top:.1
                       // },
                       backgroundColor:["yellow"],
                   },
                   
               }
           },


           responsive: true,
           maintainAspectRatio: false,
  
       }}
 width={500}
 height={491}
data={{
   labels: ['Satisfied', 'Not Satisfied'],
   datasets: [{
       label: 'Satisfaction Rate (%)' ,
       
     
       data: [
        (WorkLifeBalance)/n
           ,
         100-(WorkLifeBalance)/n
       ],
       backgroundColor: [
           'rgba(54, 162, 235, 0.2)',
           'rgba(255, 99, 132, 0.2)',
          
       ],
       borderColor: [
           'rgba(54, 162, 235, 10)',
           'rgba(255, 99, 132, 10)',
         
       ],
       borderWidth:1

   }],

     
  
}


}



/>
                </div>
                <div className="Pie4 Pie">
                <Pie 
          
                           
          options = {{
           datalabels: {
               display: true,
               color: "white",
             },
           plugins: {
               title: {
                fullSize:false,
                   font: {
                       size:15
                   },
                   display: true,
                   text: ` Respect & Recognition Satisfaction  (${(Respect)/n} %)`,
                //    padding: {
                //        bottom: -80
                //    },
                  
               },
               legend: {
                display: false,
                   labels: {
                       // This more specific font property overrides the global property
                       font: {
                           size: 15
                       },
                       // padding:{
                       //     top:.1
                       // },
                       backgroundColor:["yellow"],
                   },
                   
               }
           },


           responsive: true,
           maintainAspectRatio: false,
  
       }}
 width={500}
 height={491}
data={{
   labels: ['Satisfied', 'Not Satisfied'],
   datasets: [{
       label: 'Satisfaction Rate (%)' ,
       
     
       data: [
        (Respect)/n
           ,
         100-(Respect)/n
       ],
       backgroundColor: [
           'rgba(54, 162, 235, 0.2)',
           'rgba(255, 99, 132, 0.2)',
          
       ],
       borderColor: [
           'rgba(54, 162, 235, 10)',
           'rgba(255, 99, 132, 10)',
         
       ],
       borderWidth:1

   }],

     
  
}


}



/>
                </div>
                <div className="Pie5 Pie">
                <Pie 
          
                           
          options = {{
           datalabels: {
               display: true,
               color: "white",
             },
           plugins: {
               title: {
                   font: {
                       size: 15
                   },
                   display: true,
                   text: ` Career Growth Satisfaction (${(Challenges)/n} %)`,
              
                  
               },
               legend: {
                display: false,
                   labels: {
                       font: {
                           size: 19
                       },
                       // padding:{
                       //     top:.1
                       // },
                       backgroundColor:["yellow"],
                   },
                   
               }
           },


           responsive: true,
           maintainAspectRatio: false,
  
       }}
 width={500}
 height={491}
data={{
   labels: ['Satisfied', 'Not Satisfied'],
   datasets: [{
       label: 'Satisfaction Rate (%)' ,
       
     
       data: [
           Challenges/n
           ,
         100-Challenges/n
       ],
       backgroundColor: [
           'rgba(54, 162, 235, 0.2)',
           'rgba(255, 99, 132, 0.2)',
          
       ],
       borderColor: [
           'rgba(54, 162, 235, 10)',
           'rgba(255, 99, 132, 10)',
         
       ],
       borderWidth:1

   }],

     
  
}


}



/>
                </div>
               
             </div>
             </div>
                <div className="GloabalPie">
                <Pie 
                       
                       options = {{
                        plugins: {
                            title: {
                                font: {
                                    size: 20
                                },
                                display: true,
                                text: "Distribution of Satisfaction",
                                padding: {
                                    top: 20,
                                    bottom: 40
                                },},
                            legend: {
                                display: true,
                                labels: {
                                    font: {
                                        size: 14
                                    },
                                    backgroundColor:["yellow"],
                                }
                            }
                            
                        },
            
            
                        responsive: true,
                        maintainAspectRatio: false,
                    
                    }}
              width={500}
              height={491}
            data={{
                
                labels: ['Salary Satisfaction', 'Work Conditions & Security', 'Respect & recognition', 'Work Life Balance', 'Challenges & Career Growth'],
                datasets: [{
                    label: 'Satisfaction Rate (%)' ,

                    data: [SalarySatisfaction/n, WorkConditions/n, Respect/n, WorkLifeBalance/n, Challenges/n],
                    backgroundColor: [
                      
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 10)',
                        'rgba(54, 162, 235, 10)',
                        'rgba(255, 206, 86, 10)',
                        'rgba(75, 192, 192, 10)',
                        'rgba(153, 102, 255, 10)',
                    ],
                    borderWidth:1

                }],
            
                  
               
            }
        
        
        }
     
       
            
            />
                </div>
            </div>
        )
    
    
    else return <Loader></Loader>
//}, 1000)
}


export default Results
