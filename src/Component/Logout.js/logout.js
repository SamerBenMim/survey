import React,{useState,useEffect,useContext} from 'react'
import '../../Style/checkBox.css'
import {FirebaseContext} from '../_Firebase/index'

export const Logout = () => {
    const firebase = useContext(FirebaseContext);
    const [checked, setchecked] = useState(!false)
    useEffect(() => {
        if(!checked){
            setTimeout(() => {
                firebase.signoutUser() 
            }, 500);
            
       }
        
    }, [checked,firebase])

    const handleChange = (e)=>{
        setchecked(e.target.checked) 
    }
    return (
        <div className="logoutContainer">
            <label className="switch">
            <input 
            type="checkbox"
           checked={checked}
            onChange={
                handleChange
            }
            />
             <span class="slider round"></span>
            
            </label>
        </div>
    )
}
export default Logout