import React from 'react'

// import App from '../containers/App.css'
//  const withClass=(props)=>{

//     return (
//         <div className="App">
//                 {props.children}
//         </div>
//     );
//  }
const withClass=(WrapperComponent,className)=>{
    return (props)=> <div className={className}>
                <WrapperComponent   {...props}/>
        </div>
    
}
 export default withClass