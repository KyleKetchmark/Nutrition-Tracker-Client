import './navbar.css'
import React from "react";
import Logout from "./Logout/Logout";
import HealthPic from '../Assets/health-clubs-gyms-icon.png'

const Navbar = (props) => {

    return (
        <div id='navbar'>
            <nav style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#476845",
                borderBottom: "1px solid black",                
                flexFlow: "row nowrap"
                }}>
                <div style={{margin: '2%'}}>
                    <img src={HealthPic} alt="healthy lifestyle" style={{height: '40%', width: '40%'}}/>
                </div>
                <div style={{background: 'whitesmoke', textAlign: 'center', padding: '1%', margin: "2%", borderRadius: '20px'}}>
                    <h2 style={{color: "black"}}>Daily Nutrient Tracker</h2>
                    {/* <span style={{marginLeft: '2em'}}>
                        <h2>Daily Total Cals: {props.totalkCal}</h2>
                    </span>
                    <span style={{marginLeft: '2em'}}>
                        <h2>Weekly Total: {props.totalkCal}</h2>
                    </span> */}
                </div>
                <div style={{margin: '3%'}}>
                    <Logout clearLocalStorage={props.clearLocalStorage} />
                </div>
            </nav>
        </div>
    )
}

export default Navbar;