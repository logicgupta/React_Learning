import React, { Component, useState } from 'react';
import './App.css';
import Styled from 'styled-components'

import Persons from '../components/Persons/Persons'
import Cockpit from '../Cockpit/Cockpit'


                // We use nomal css styling to Style the components in syled-component
                const StyleButton=Styled.button`
                background-color:${props=>props.alt ?'green':'red'};
                color:white;
                font:inherit;
                border:2px solid blue;
                padding:8px;
                cursor:pointer;
                &:hover{
                      background-color:${props=>props.alt ?'salmon':'lightgreen'};
                      color:black;
                }
          `;
            



class App extends Component {

  constructor(props){
    super(props);
    console.log(' [App.js] constructor')
  }

  state = {
    persons: [
      { id:'sssd1',name: 'Max', age: 28 },
      { id:'sssd2',name: 'Manu', age: 29 },
      { id:'sssd3',name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    visible:false
  };


  static getDerivedStateFromProps(props,state){

    console.log('  [App.js]  getDerivedStateFromProps');
    return state;

  }


  componentDidMount(){
    console.log(' [App.js ]   componentDIDMount');
  }


 

  shouldComponentUpdate(nextprops,nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;          // If we return false then all the other component will not update .
                          // i.e. The Toggle Button here will prevent from Display of the Per
  }


  componentDidUpdate(){

    console.log('[App.js]  componentDidUpdate ');
  }

  componentWillUnmount(){
    console.log(' [App.js]  Clearing the App js');
  }



  switchNameHandler = (userName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        {id:'sssd1', name: userName, age: 28 },
        { id:'sssd2',name: 'Manu', age: 29 },
        { id:'sssd3',name: 'Stephanie', age: 27 }
      ]
    });
  };

  onChangeListener=(event,index)=>{

    const personIndex=this.state.persons.findIndex((person)=>{
      return person.id===index;
    })

    const person =this.state.persons[personIndex];
    person.name=event.target.value;

    const persons=[...this.state.persons];
    persons[personIndex]=person;

    this.setState({
      persons: persons
    });
  }

  onToggleListener=()=>{
    const visible=this.state.visible;
    this.setState({
      visible:!visible
    })
  }

  onDeleteListener=(index)=>{
   const person=this.state.persons;
      person.splice(index,1);     //  Removes the element from the Array
      this.setState({
        persons:person
      });
      console.log('Hello',index);
  }

  


  render() {
    
    let persons=null

    if(this.state.visible){
     persons=(
      <div>
      <Persons
      persons={this.state.persons}
      click={this.onDeleteListener}
      onChange={this.onChangeListener}
      >
      </Persons>
    </div>)
   

    }

    return (
      
      <div className="App">
        <Cockpit
        persons={this.state.persons}
        visible={this.state.visible}
        onToggleListener={this.onToggleListener}
        >

        </Cockpit>

        {persons}

      </div>
     
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

//  Hooks      ------> useState

// const App=(props)=>{

//   const [personState,personSetState]=useState({
//      persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 26 }
//     ],
//     otherState: 'some other value'
//   });


// const  switchNameHandler=()=>{
//     personSetState({
//       persons: [
//               { name: 'Logic Gupta', age: 28 },
//               { name: 'Manu', age: 29 },
//               { name: 'Stephanie', age: 26 }
//             ],
//             otherState: 'some other value'
//     });
//   };


//   return (
//           <div className="App">
//             <h1>Hi, I'm a React App</h1>
//             <p>This is really working!</p>
//             <button onClick={switchNameHandler}>Switch Name</button>
//             <Person
//               name={personState.persons[0].name}
//               age={personState.persons[0].age}
//             />
//             <Person
//               name={personState.persons[1].name}
//               age={personState.persons[1].age}
//             >
//               My Hobbies: Racing
//             </Person>
//             <Person
//               name={personState.persons[2].name}
//               age={personState.persons[2].age}
//             />
//           </div>
//         );


// }

// export default App;