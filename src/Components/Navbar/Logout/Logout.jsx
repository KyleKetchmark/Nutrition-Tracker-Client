import './logout.css';
import React from "react";

const Logout = (props) => {

    return (
            <button id='logout' className='Logout' onClick={props.clearLocalStorage}>Logout</button>
    )
}

export default Logout;