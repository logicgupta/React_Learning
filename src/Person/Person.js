import  React   from    'react'
import './Person.css'

const   person=(props)=>{
return (
    <div className="Person" >
        <p onClick={props.click} >My   Name    is {props.name}    and Age {props.age}</p>
        <p>{props.children}</p>
        <input  type="text" onChange={props.onChangeListener}/>
    </div>
)
}

export  default person