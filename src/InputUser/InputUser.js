import React from 'react'
const inputUser=(props)=>{

    const style={
        border:'2px solid #eeeeee'

    }

    return(
            <input  style={style} 
            type="text" onChange={props.inputChangeHandler} 
            value={props.userName}></input>
    );
}

export default inputUser