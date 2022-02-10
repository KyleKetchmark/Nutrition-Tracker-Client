import './navbar.css'
import React from "react";
import Logout from "./Logout/Logout";
import HealthPic from '../Assets/health-clubs-gyms-icon.png'

const Navbar = (props) => {

    return (
        <div>
            <nav style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#476845",
                borderBottom: "1px solid black",
                boxShadow: "0px 5px white",
                flexFlow: "row nowrap"
                }}>
                <div style={{margin: '2%'}}>
                    <img src={HealthPic} alt="healthy lifestyle" style={{height: '40%', width: '40%'}}/>
                </div>
                <div>
                    <h2 style={{color: "whitesmoke"}}>Daily Nutrient Tracker</h2>
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