import React from "react";
import './logout.css';

const Logout = (props) => {

    return (
            <button id='logout' className='Logout' onClick={props.clearLocalStorage} style={{height: '100%', width: '100%', margin: '0%', textAlign: "center"}}>Logout</button>
    )
}

export default Logout;