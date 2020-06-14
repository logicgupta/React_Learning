import  React   from    'react'
// import Radium from 'radium' 
// import './Person.css'
import styled from 'styled-components'

const StyledDiv=styled.div`
                width: 60%;
                margin: 16px auto;
                border: 2px solid #eeeeee;
                box-shadow: 0px 2px 3px #cccccc;
                padding: 16px;
                text-align: center;

                @media(min-width:400px){
                    width:450px;
                }

    `;

const   person=(props)=>{

return (
    <StyledDiv  >
        <p onClick={props.click} >My   Name    is {props.name}    and Age {props.age}</p>
        <p>{props.children}</p>
        <input  type="text" onChange={props.onChangeListener}/>
    </StyledDiv>
)
}

export  default person