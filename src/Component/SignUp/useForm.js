import  {useState,useEffect , useContext} from "react";
import { FirebaseContext } from "../_Firebase";
import Firebase from "../_Firebase";
const useForm =(callback,validate)=>{

    const firebase = useContext(FirebaseContext);
    const [values,setValues] = useState({
        username:'',
        email:'',
        password:'',
        password2:'',
    })
    const [errors,setErrors] = useState({})
    const [done,setDone] = useState(true)

    const [isSubmitting,setIsSubmitting] = useState(false);
    const handleChange = e=> {
        const {name,value}=e.target
        setValues({
            ...values,
            [name]:value
        })
    };
    const handleSubmit=e=>{
        
         e.preventDefault();
          
         setErrors(validate(values)) 
         setIsSubmitting(true) 
         
  
    
    };
    /**    return (Promise.resolve(firebase.signupUser(values.email,values.password)).then(user=>{ setValues( {
        username:'',
        email:'',
        password:'',
        password2:'',
    }) 
})  
    ) */
    /** */



    useEffect(()=>{
        if(Object.keys(errors).length===0 && isSubmitting){
            firebase.auth.createUserWithEmailAndPassword(values.email,values.password).catch(e=>{
                   
                if(e.message==="The email address is already in use by another account.") 
                alert(e)
                setDone(false)
            }).then(()=>{
                //  if(done)
                // callback()
            } 
               )

            
        }
    },[errors])




    
    return{handleChange,values,handleSubmit,errors}
    
}
export default useForm