import React,{ PureComponent} from 'react';

import Person from './Person/Person'
import withClass from '../../hoc/WithClass'

class Persons extends PureComponent{
 
  shouldComponentUpdate(nextProps,nextState){
    console.log('[Persons.js]  shouldComponentUpdate');
    // if(nextProps.persons!==this.props.persons){
    //   return true;
    // }
    // else{
    //   return false;
    // }

    return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('[Persons.js]   getSnapshotBeforeUpdate');
    return {message:'UPdate !'};
  }
  componentDidUpdate(){
    console.log(' [Persns.js]  ComponentDidUpdate');
  }
  
  componentDidMount(props,state,snapshot){
    console.log('[Persons.js]  componentDidMount');
    console.log(snapshot);
  }



  render(){
    return(
      this.props.persons.map((pers,index)=>{
        return(
          <Person 
          name={pers.name}
          age={pers.age}
          click={()=>this.props.click(index)}    // Delete 
          onChangeListener={(event)=>this.props.onChange(event,pers.id)}
          key={pers.id}
      //    isAuth={this.props.isAuthenticate}
          />
        )
    })
    )
}
}


export default withClass(Persons,"App");
