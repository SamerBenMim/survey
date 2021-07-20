import React, { useState,useContext,useEffect } from 'react';
import Barr from '../quizz/bar'
import '../../Style/Stats.css'
import Intermidiaire from '../quizz/Intermidiaire';
import {FirebaseContext} from '../_Firebase/index'
import Loader from '../Loader/Loader';
import { Bar,line ,Pie } from  'react-chartjs-2';
import eventBus from '../EventBus';
import Results from '../quizz/results';
export default function Stats(props) {
    
console.log(props.samer)
      const firebase = useContext(FirebaseContext);
    const [userSession,setUserSession] =useState(null);
    const [datas,setData] =useState([]);
    
    const [SalarySatisfaction,setSalarySatisfaction] =useState(10);
    const [WorkConditions,setWorkConditions] =useState(10);
    const [Respect,setRespect] =useState(11);
    const [WorkLifeBalance,setWorkLifeBalance] =useState(10);
    const [Challenges,setChallenges] =useState(17);
    const [wait,setwait] =useState(false);



    
 
     useEffect(() => {
        
        let listener =firebase.auth.onAuthStateChanged(user=>{
            user? setUserSession(user) :props.history.push('/Login')
     })

    
          

    }, [])


if(userSession&& !wait)
    return (
        <>

        {/* <Intermidiaire propStats="samer" >adadadad</Intermidiaire> */}
            <Barr/>
            <div className="graphContainer"   >
            <Bar 
                       
                       options = {{
                        plugins: {
                            legend: {
                                display: false,
                                labels: {
                                    // This more specific font property overrides the global property
                                    // font: {
                                    //     size: 14
                                    // },
                                    backgroundColor:["yellow"],
                                }
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
                labels: ['Salary Satisfaction', 'Work Conditions & Security', 'Respect & recognition', 'Work Life Balance', 'Challenges & Career Growth'],
                datasets: [{
                    label: 'Satisfaction Rate (%)' ,

                    data: [SalarySatisfaction, WorkConditions, Respect, WorkLifeBalance, Challenges],
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
            
        </>
    )
    else {
return <Loader></Loader>
   }
}
