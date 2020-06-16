import  React , {Component} from    'react'
// import Radium from 'radium' 
// import './Person.css'
import styled from 'styled-components'

import Aux from '../../../hoc/Aux'

class   Person extends Component{

    render(){
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
    return (
        <Aux  >
            <p onClick={this.props.click} >My   Name    is {this.props.name}    and Age {this.props.age}</p>
            <p>{this.props.children}</p>
            <input  type="text" onChange={this.props.onChangeListener}/>
        </Aux>
    )
    }
    }


export  default Person