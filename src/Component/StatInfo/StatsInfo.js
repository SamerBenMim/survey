import React from 'react'
import Bar from '../quizz/bar'
import jobsatisfaction from '../../assets/job_satisfaction.jpg'
import '../../Style/Statsinfo.css'

export default function StatsInfo() {
    return (
        <div>
            <Bar/>
            <div>
            <div className="jobSatisfactionContainer">
                <img src={jobsatisfaction} alt = 'JobSatisImg' className="JobSatisImg"/>
                <div className="statsInfoText">
                <h1>What is Job Satisfaction?
</h1>
                <p>Job satisfaction is defined as the extent to which an employee feels self-motivated, content & satisfied with his/her job. Job satisfaction happens when an employee feels he or she is having job stability, career growth and a comfortable work life balance. This implies that the employee is having satisfaction at job as the work meets the expectations of the individual.
</p>                <h1>How do we calculate Satifaction rate?</h1>
<p> The Satisfaction rate is the average of all the satisfaction rate of the five catigory mentioned in the diagram. Each proposition in the survey has  5 percentages of satisfaction Salary Satisfaction , Working Condition & Security , Work life Balance  Satisfaction , Rspect & Recognition Satisfaction   and Career Growth satisfaction
    <br></br>
    The General Satisfaction rate is average of all participants Satisfaction Rate
</p>
            </div>
                 </div>
         
            </div>
        </div>
    )
}
