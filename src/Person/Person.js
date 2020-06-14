import  React   from    'react'
import Radium from 'radium' 
import './Person.css'

const   person=(props)=>{

    const style={
        '@media(min-width:500px)':{
            width:'450px'
        }
}
  
return (
    <div style={style} className="Person" >
        <p onClick={props.click} >My   Name    is {props.name}    and Age {props.age}</p>
        <p>{props.children}</p>
        <input  type="text" onChange={props.onChangeListener}/>
    </div>
)
}

export  default Radium(person)