import React, { useState, useEffect } from "react";
import './auth.css';
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import ReactForm from "./RegisterForm";
import APIURL from "../../helpers/environment";
import Healthy from "../Assets/health-clubs-gyms-icon.png"

const Auth = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);

    const loginSubmit = (event) => {
        event.preventDefault()

        let reqBody = {
            email,
            password
        }

        let url = `${APIURL}/user/login`
        console.log(reqBody)

        fetch(url, {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
            .then(res => res.json())
            .then(data => props.updateLocalStorage(data.sessionToken))
            .catch(err => console.log(err))
    }

    const handleShow = () => setShow(true);

    const toggleFunction = () => {
        setShow(!show)
    }

    const ModalIsShowing = (e) => {
        return (
            <div id="auth">
                <Modal isOpen={show} toggle={toggleFunction} className="registerModal">
                    <ModalHeader toggle={toggleFunction} style={{ textAlign: "center" }}>
                        Register for a Nutrition Tracker Account
                    </ModalHeader>
                    <ModalBody>
                        <ReactForm toggleFunction={toggleFunction} show={show} updateLocalStorage={props.updateLocalStorage} />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={toggleFunction}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

    return (
        <div id="loginPage">
            <div id="loginInfo">
                <img src={Healthy} alt="" style={{ margin: "1%" }} />
                <div className="loginText">
                    <h2 style={{ margin: "2%" }}><i>Welcome to the Nutrition Tracker App!</i></h2>
                    <p>Returning user? Login below. Otherwise press "Register" to sign up!</p>
                </div>
            </div>
            <div id="loginInput">
                <div className="loginText">
                    <Form className="registerForm">
                        <FormGroup>
                            <Label for="loginEmail">
                                <b>Email</b>
                            </Label>
                            <Input
                                id="loginEmail"
                                name="email"
                                placeholder="example@email.com"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="loginPassword">
                                <b>Password</b>
                            </Label>
                            <Input
                                id="loginPassword"
                                name="password"
                                placeholder="enter password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormGroup>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Button onClick={(e) => { loginSubmit(e) }} style={{ margin: "2px 5px" }}>
                                <b>Login</b>
                            </Button>
                            <Button onClick={handleShow} style={{ margin: "2px 5px" }}>
                                <b>Register</b>
                            </Button>
                        </div>
                    </Form>
                </div>
                {show === true ? <ModalIsShowing /> : <></>}
            </div>
        </div>
    )
}

export default Auth;