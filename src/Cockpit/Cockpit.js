import React , {useEffect,useRef} from 'react'

const cockpit=(props)=>{

    // Its showing Error

    // useEffect(()=>{
        // toggleRef.current.click()
    //         console.log('[Cockpit.js]  useEffect');    // Error We are unable to use
    // },[]);

    // useEffect(()=>{
    //     console.log('[Cockpit.js]  useEffect');    // Error We are unable to use

    //     return()=>{
    //         console.log('Clearing Work')
    //     }
    // });

    // const toggleRef=useRef(null);


    const classes=[]
    if(props.visible){
        classes.push('red');
    }

    if(props.persons.length<=2){
        classes.push('red');
    }
    if(props.persons.length<1){
      classes.push('bold');
    }

    return(
        <div>
            <h1 >Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <p >This is really working!</p>
            <button 
            alt={props.visible}
            //ref={toggleRef}
            onClick={props.onToggleListener}
            >Toggle Element</button>

            <button
            onClick={props.authenticate}
            >Login</button>
        </div>
    )
}

export default cockpit