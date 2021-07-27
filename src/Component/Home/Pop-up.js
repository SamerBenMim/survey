import React, { useState } from 'react'
import '../../Style/Popup.css'


 


 export function Popup (props) {
    const [currentState , setstate] = useState(props.myState.open)
    

  

       if(!props.myState.open) return null
       
        else
         return ( 
            <div   className='OverLayStyle'  onClick= { ()=>{ setstate(!currentState); 
            props.myState.open = ! props.myState.open}  } >
            <div  
             className = 'PopupStyle' >
            <p >

{/* For Employees: Job satisfaction from an employee perspective is to earn a good gross salary, have job stability, have a steady career growth, get rewards & recognition and constantly have new opportunities.

For Employers: For an employer, job satisfaction for an employee is an important aspect to get the best out of them. A satisfied employee always contributes more to the company, helps control attrition & helps the company grow. Employers needs to ensure a good job description to attract employees and constantly give opportunities to individuals to learn and grow. */}

{/* The positive effects of job satisfaction include:
 More efficiency of employees of workplace if they are satisfied with their job./
Higher employee loyalty leading to more commitment./
Job satisfaction of employees eventually results in higher profits for companies./
 High employee retention is possible if employees are happy.<br></br>
 It’s an important question to ask yourself fairly regularly: are you satisfied with your job? */}

It can be a daunting question, especially if you suspect your answer to be ‘no.’ However, being honest with yourself about your job satisfaction allows for potential growth and an ultimately more satisfying job experience. If your answer is ‘no,’ you can work toward making a difference for yourself.

You may be unsatisfied for a number of reasons. Maybe you have gone as far as you can within the company you currently work for, or maybe you are not being challenged enough in your current position. Not being able to see a future that encourages growth will likely lead to an overall feeling of dissatisfaction.

Other factors that may impact your satisfaction include pay, work environment, or the work itself. Overall, if you feel as though you are not getting as much out of your job as you are putting in, you may feel dissatisfied.

When it comes to evaluating your job satisfaction and the reason for any dissatisfaction, it is important to be honest with yourself so as to determine your next steps. If your dissatisfaction boils down to the work you are doing, exploring alternative job opportunities is the most advantageous to you. If your issues lie with the company you are working for, having a frank conversation with your boss will help you the most.
A satisfied employee is always important for an organization as he/she aims to deliver the best of their capability. Every employee wants a strong career growth and work life balance at workplace. If an employee feels happy with their company & work, they look to give back to the company with all their efforts. Importance of job satisfaction can be seen from two perspectives i.e. from employee and employer perspective.
.</p>
            </div>   
            </div>
        )
 }
 
 export default Popup
        
  
    


