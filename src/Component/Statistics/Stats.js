
import React, { useState,useContext,useEffect } from 'react';
import Barr from '../quizz/bar'
import '../../Style/Stats.css'
import Intermidiaire from '../quizz/Intermidiaire';
import {FirebaseContext} from '../_Firebase/index'
import Loader from '../Loader/Loader';
import { Bar,line ,Pie,Doughnut,Scatter } from  'react-chartjs-2';
import eventBus from '../EventBus';
import Results from '../quizz/results';
import '../../Style/Stats.css'
import img from '../../assets/undraw_Growth_analytics_re_pyxf.svg'
export default function Stats(props) {
    
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
const [min,setmin] =useState(100);
const [max,setmax] =useState(0);
const [ms,setms] =useState([]);
const [wlb,setwlb] =useState([]);
const [ch,setch] =useState([]);
const [wc,setwc] =useState([]);
const [rr,setrr] =useState([]);
const [points,setpoints] =useState([]);
const [dispertion,setdispertion] =useState([]);
const [variance,setVariance]=useState(0);
//const [done,setdone] =useState(false);
// const [SalarySatisfaction,setSalarySatisfaction] =useState(10);
const [loading, setLoading] = useState(true);


function avg(a) {
  
  let c = 0, l =a.length 
  a.forEach(x=> c+=x)
 
  return c/l;
}
 

const loadContent1 = ()=>{ 


}
async function anyNameFunction1() {
await loadContent1();
}



var mn=100
var mx=0    
var v=0      
const Ms=[]
const Wlb=[]
const Ch=[]
const Wc=[]
const Rr=[]
const percents = []
const Satis=[0,0,0,0,0,0,0,0,0,0]
const datass=[]
var id=0
useEffect(() => {   
 
   
let listener =firebase.auth.onAuthStateChanged(user=>{
 user? setUserSession(user) :props.history.push('/Login')
 if(user.email)
 setUserEmail(user.email)
})

 
 firebase.coll('users')
.get()
.then(element=> {
element.forEach(doc=>{ 
 const data =doc.data()
 if(data.userResult && data.numberOfQuestions){ 

  
     const loadContent = ()=>{ 
     // eslint-disable-next-line react-hooks/exhaustive-deps
     v+=((data.userResult.bonusRespectAndRecognition+data.userResult.bonusWorkingConditions+data.userResult.bonusMaterialSituation+data.userResult.bonusWorkLifeBalance+data.userResult.bonusCareerGrowth)/(5*data.numberOfQuestions))*((data.userResult.bonusRespectAndRecognition+data.userResult.bonusWorkingConditions+data.userResult.bonusMaterialSituation+data.userResult.bonusWorkLifeBalance+data.userResult.bonusCareerGrowth)/(5*data.numberOfQuestions))
      setVariance(v)
      console.log(v) 

      Ms.push(data.userResult.bonusMaterialSituation /data.numberOfQuestions )
      Wlb.push(data.userResult.bonusWorkLifeBalance /data.numberOfQuestions )
      Ch.push(data.userResult.bonusCareerGrowth /data.numberOfQuestions )
      Wc.push(data.userResult.bonusWorkingConditions /data.numberOfQuestions )
      Rr.push(data.userResult.bonusRespectAndRecognition /data.numberOfQuestions )
   Satis[Math.trunc((data.userResult.bonusRespectAndRecognition+data.userResult.bonusWorkingConditions+data.userResult.bonusMaterialSituation+data.userResult.bonusWorkLifeBalance+data.userResult.bonusCareerGrowth)/(5*data.numberOfQuestions*10))]++

if(mn > (data.userResult.bonusRespectAndRecognition+data.userResult.bonusWorkingConditions+data.userResult.bonusMaterialSituation+data.userResult.bonusWorkLifeBalance+data.userResult.bonusCareerGrowth)/(5*data.numberOfQuestions))
{mn=((data.userResult.bonusRespectAndRecognition+data.userResult.bonusWorkingConditions+data.userResult.bonusMaterialSituation+data.userResult.bonusWorkLifeBalance+data.userResult.bonusCareerGrowth)/(5*data.numberOfQuestions))

}
if(mx< (data.userResult.bonusRespectAndRecognition+data.userResult.bonusWorkingConditions+data.userResult.bonusMaterialSituation+data.userResult.bonusWorkLifeBalance+data.userResult.bonusCareerGrowth)/(5*data.numberOfQuestions))
mx=((data.userResult.bonusRespectAndRecognition+data.userResult.bonusWorkingConditions+data.userResult.bonusMaterialSituation+data.userResult.bonusWorkLifeBalance+data.userResult.bonusCareerGrowth)/(5*data.numberOfQuestions))
   datass.push({
  x:id,
  y:(data.userResult.bonusRespectAndRecognition+data.userResult.bonusWorkingConditions+data.userResult.bonusMaterialSituation+data.userResult.bonusWorkLifeBalance+data.userResult.bonusCareerGrowth)/(5*data.numberOfQuestions)
})

if(id>0) id =-id 
else if(id<0) id= -id +1
else (id++)
   setms(Ms);setdispertion(Satis)
   setmax(mx)
   setmin(mn)
      console.log(Satis)
              setwlb(Wlb);
              setch(Ch);
              setwc(Wc);
              setrr(Rr);
              
     }
     async function anyNameFunction() {
         await loadContent();
       }
         
       anyNameFunction()
       
      
          
          
         
      
      
    
 }
 
 else{}
},
 )
}

)

.catch(e=>{})
setpoints(datass)
setdispertion(Satis)

setTimeout(() => {
setLoading(false)
}, 1000)
}, [userEmail])

if(userSession&& !loading)
    return (
        <>

            <Barr/>
            <div className ="PieContainer1">
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
                                    text: ` Average Satisfaction of all participants (${((avg(ms)+avg(rr)+avg(ch)+avg(wc)+avg(wlb))/5).toFixed(3)} %)`,
                                    padding: {
                                        top: 20,
                                        bottom: 20
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
                            layout: {
                              padding: 50
                          }
                            
                        }}
                  width={500}
                  height={491}
                data={{
                    labels: ['Satisfaction ', 'Dissatisfaction '],
                    datasets: [{
                        label: 'Satisfaction Rate (%)' ,
                        
                      
                        data: [
                          (avg(ms)+avg(rr)+avg(ch)+avg(wc)+avg(wlb))/5
                            ,
                         100-(avg(ms)+avg(rr)+avg(ch)+avg(wc)+avg(wlb))/5
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
                        borderWidth:1,
                        hoverOffset:40

                    }],
                
                      
                   
                }
            
            
            }
         
           
                
                />
            </div>

            <div className="bargraphContainer"   >
            <Bar 
                       
                       options = {{
                        plugins: {
                          title: {
                            font: {
                                size: 20
                            },
                            display: true,
                            text: ` Average Satisfaction per category (%)`,
                            padding: {
                                top: 0,
                                bottom:30
                            },
                           
                        },
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

                    data: [avg(ms),avg(wc), avg(rr), avg(wlb), avg(ch) ],
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
            <div>
<div className="doughnutContainer">
      <Doughnut
        data={{

          labels: ['Unhappy' , "Neither Happy Nor Unhappy", 'Happy' ],
          datasets: [
            {
              label: '# of votes',
              data: [dispertion[0]+dispertion[1]+dispertion[2]+dispertion[3]+dispertion[4],dispertion[5],dispertion[6]+dispertion[7]+dispertion[8]+dispertion[9]],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(33, 35, 34, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                

              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(33, 35, 34, .5)',
                'rgba(54, 162, 235, 1)',
               
              ],
              borderWidth: 1,
              hoverOffset: 70

            },
        
         
            
          ],
          
        }}
        options={{
          plugins: {
            title: {
                font: {
                    size: 20
                },
                display: true,
                text: `Measure employee happiness`,
                padding: {
                    top: 0,
                    bottom:30
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
          maintainAspectRatio: false,
          responsive:true,
          aspectRatio:1,
          // legend: {
          //   labels: {
          //     fontSize: 25,
          //   },
          // },
          layout: {
            padding: 50
        }
        }}
      />
    </div>














    <div className="Scatter">
      <Scatter
        data={{

          datasets: [{
            label: 'coordinates( id,percentage) ',
            data: points,
          backgroundColor: 'rgb(255, 99, 132)'

           
          }
         
            
          ]
          
        }}
        options={{
        
            scales: {
              x: {
                type: 'linear',
                position: 'bottom'
              }
            },
          
          plugins: {
            title: {
                font: {
                    size: 20
                },
                display: true,
                text: ` Dispersion Of Work-Satisfaction in Proxym `,
                padding: {
                    top: 0,
                    bottom:30
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
          maintainAspectRatio: false,
          responsive:true,
          aspectRatio:1,
          // legend: {
          //   labels: {
          //     fontSize: 25,
          //   },
          // },
          layout: {
            padding: 50
        }
        }}
      />
    </div>



    </div>


<div className="interpretationContainer">
  <div className="analytics">
  <h1>Interpretations</h1>
<p>The Minimum Satisfacion Rate Is <span style={{'color':"red" , 'fontSize':"25px"}}>{min} %</span> </p>
<p>The Maximum Satisfaction Rate  Is <span style={{'color':"green",'fontSize':"25px"}}>{max}  %</span></p>
<p>The Satisfaction Rate Variance Is : <span style={{'color':"purple",'fontSize':"25px"}}>{ (variance/(dispertion[0]+dispertion[1]+dispertion[2]+dispertion[3]+dispertion[4]+dispertion[5]+dispertion[6]+dispertion[7]+dispertion[8]+dispertion[9])-((avg(ms)+avg(rr)+avg(ch)+avg(wc)+avg(wlb))/5)*((avg(ms)+avg(rr)+avg(ch)+avg(wc)+avg(wlb))/5)).toFixed(3)} </span></p>
<p>The Satisfaction Rate Standard deviation 
 Is : <span style={{'color':"blue",'fontSize':"25px"}}>{Math.sqrt((variance/(dispertion[0]+dispertion[1]+dispertion[2]+dispertion[3]+dispertion[4]+dispertion[5]+dispertion[6]+dispertion[7]+dispertion[8]+dispertion[9])-((avg(ms)+avg(rr)+avg(ch)+avg(wc)+avg(wlb))/5)*((avg(ms)+avg(rr)+avg(ch)+avg(wc)+avg(wlb))/5))).toFixed(3)} %</span> </p>
 </div>
 <div className ="statsimg">
                <img src={img} alt = 'img' className="statimg"/>            
            </div>
</div>
<div className="jobRisk">
<div>
  <h1 style={{  'color': '#848484',
        'lineHeight': '50px',"fontFamily":'sans-serif'}}>Anticipation</h1>
  <div id="cercle" style={{'background': '#2690ce85'}}><div style={{'marginTop': '34px'}}><p style={{"fontSize":"37px"}}>{(100*(dispertion[9]+dispertion[8]+dispertion[7]+dispertion[6] -2)/(dispertion[0]+dispertion[1]+dispertion[2]+dispertion[3]+dispertion[4]+dispertion[5]+dispertion[6]+dispertion[7]+dispertion[8]+dispertion[9])).toFixed(1)}%</p>of employees whould never leave their jobs and search for other opportunities</div></div>
  <div id="cercle" style={{'background': '#ff492c75'}}><div style={{'marginTop': '34px'}}><p style={{"fontSize":"37px"}}>{(100*(dispertion[0]+dispertion[1]+dispertion[2])/(dispertion[0]+dispertion[1]+dispertion[2]+dispertion[3]+dispertion[4]+dispertion[5]+dispertion[6]+dispertion[7]+dispertion[8]+dispertion[9])).toFixed(1)}%</p>of employees whould resign from their job and search for new opportunities</div></div>
</div>
</div>


        

  
          








        </>
    )
    else {
return <Loader></Loader>
   }
}
