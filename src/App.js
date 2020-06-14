import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';
import InputUser from './InputUser/InputUser'
import OutputUser from './OutputUser/OutputUser'
import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'sssd1',name: 'Max', age: 28 },
      { id:'sssd2',name: 'Manu', age: 29 },
      { id:'sssd3',name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    visible:false
  };

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

    const style={
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'2px solid blue',
      padding:'8px',
      cursor:'pointer'
    }

    let persons=null

    if(this.state.visible){
     persons=(
      <div>
      {
        this.state.persons.map((pers,index)=>{
            return(
              <Person 
              name={pers.name}
              age={pers.age}
              click={()=>this.onDeleteListener(index)}
              onChangeListener={(event)=>this.onChangeListener(event,pers.id)}
              key={pers.id}

              />
            );
        })
      }
    </div>)
    style.backgroundColor='red'
    }




    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={this.onToggleListener}>Toggle Element</button>
       
        {persons}

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

// export default App;

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

export default App;