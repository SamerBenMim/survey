import React, { useState } from 'react'

const PopupStyle = {
    position:'fixed',
    left:'50%',
    top:'50%',
    transform:'translate(-50%,-50%)',
    zIndex:'100',
    backgroundColor: '#FFF',
    width: '61vw',
    height: '68vh',
    borderRadius: '20px'

}
const OverLayStyle= {
    position:'fixed',
    left:0,
    bottom:0,
    right:0,
    top:0,
    backgroundColor : 'rgba(0,0,0, .7)',
}

 


 export function Popup (props) {
    const [currentState , setstate] = useState(props.myState.open)
    

  

       if(!props.myState.open) return null
       
        else
         return ( 
            <div   style={OverLayStyle} onClick= { ()=>{ setstate(!currentState); 
            props.myState.open = ! props.myState.open}  } >
            <div  
             style={PopupStyle} >
            <p style={{width:'100%', textAlign:"center", margin: 'auto',
    width: '80%',
    textAlign: 'center',
    marginTop: '9vh',} }>Lorem ipsum fugiat ad mollit ad esse exercitation nulla ex qui sunt proident voluptate pariatur. Sunt irure duis aliqua labore qui laborum aliquip officia dolore irure ullamco laboris amet elit. Amet ea deserunt nisi occaecat sint elit consequat officia dolore est culpa sint. Ad Lorem irure eiusmod in irure aliquip voluptate commodo sint ad non.Eu non labore ex nisi incididunt dolore elit nostrud ex tempor laboris. Adipisicing consequat est consequat cupidatat commodo et est consequat dolore culpa id adipisicing sunt. Anim dolor nostrud ad magna culpa dolore tempor. Cillum anim qui velit dolore qui pariatur esse enim incididunt veniam. Deserunt ex dolore minim consequat in incididunt incididunt officia laborum ullamco voluptate elit est velit. Veniam incididunt incididunt occaecat amet cillum veniam tempor dolore.

Elit mollit incididunt fugiat esse enim aliquip. Fugiat deserunt amet velit ex proident eiusmod veniam cillum veniam qui Lorem qui aliqua ullamco. Minim exercitation consequat esse esse duis anim. Deserunt consectetur et Lorem mollit magna amet mollit sint Lorem ut aute qui in aliqua.

Nulla duis ipsum ea pariatur et in aliqua fugiat eu proident velit labore. Incididunt sunt id officia elit quis labore incididunt non ad irure qui aliquip. Proident exercitation do minim irure enim mollit.

Amet nostrud quis deserunt duis duis non qui exercitation in exercitation. Sit officia anim elit culpa enim adipisicing velit consequat et ad irure. Velit sint qui velit sunt officia incididunt id aliquip velit cupidatat dolore. Aute dolor nostrud adipisicing sunt exercitation ex. Cupidatat nulla labore irure minim veniam ullamco exercitation magna eu amet. Aliquip reprehenderit ad in et occaecat nulla pariatur elit anim consectetur consectetur id velit Lorem. Eu veniam voluptate do nostrud occaecat do do nostrud nisi anim.</p>
            </div>   
            </div>
        )
 }
 
 export default Popup
        
  
    


