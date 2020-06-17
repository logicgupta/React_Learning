import  React , {Component} from    'react'
// import Radium from 'radium' 
// import './Person.css'
import styled from 'styled-components'

import Aux from '../../../hoc/Aux'

import AuthContext from '../../../context/auth-context'

class   Person extends Component{

    constructor(props){
        super(props);

        this.inputElementRef=React.createRef();
    }


    static contextType=AuthContext;

    componentDidMount(){
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log('Checking ...',this.context.authenticated);
    }

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
    // Aux component and React.Fragment does the same so we can use anyone of them.
    // I am using here Aux 
    // Technically we can use <React.Fragment> because it reduces our code.
    return (
        <Aux  > 
            {/* <AuthContext.Consumer>
            {(context)=>context.authenticated? <p>Authenticated!</p> :<p> Please Login</p>
            }
            </AuthContext.Consumer> */
            this.context.authenticated ? <p>Authenticated!</p> :<p> Please Login</p>
            
            }
           
            <p onClick={this.props.click} >My   Name    is {this.props.name}    and Age {this.props.age}</p>
            <p>{this.props.children}</p>
            <input  
            key="i3"
            type="text"
            // ref={(inputEl)=>this.inputElement=inputEl}
            ref={this.inputElementRef}
            onChange={this.props.onChangeListener}/>
        </Aux>
           
       
    )
    }
    }


export  default Person