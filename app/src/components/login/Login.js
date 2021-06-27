import './Login.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Register from "../register/register"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
} from "react-router-dom";

async function loginUser(credentials) {
    console.log(credentials)
    return fetch('http://localhost:8080/SolidCode-BackEnd/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}



export default function Login({ setToken }) {
    return (
        <div className="">
            <Router>
                <div className="router">
                    <ul>
                    <div className="router">
               <li>
                    <NavLink exact activeClassName="selected" to="/">Login</NavLink>
                    </li>
                    <li>
                    <NavLink exact activeClassName="selected" to="/Endpoint1">Register</NavLink>
                    </li>
                    </div>
                    </ul>
                </div>
                <Switch>
                    <Route exact path="/">
                        <Opgave setToken={setToken} />
                    </Route>

                    <Route exact path="/Endpoint1">
                        <Register  setToken={setToken} />
                    </Route>


                </Switch>
               
            </Router>
            </div>
    )
}



function Opgave({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }
    return (


        <div className="login-wrapper">
            <img src="https://i.imgur.com/1qbeSgn.png"></img>
            <div className="login-container">
                <div><h1>Unnamed Project</h1></div>
                <h3>Please Log In</h3>
                <div className="login-Form">
                    <form onSubmit={handleSubmit}>
                        <label>
                            <p>Username:</p>
                            <input onChange={e => setUserName(e.target.value)} placeholder="User name" type="text" />
                        </label>
                        <label>
                            <p>Password:</p>
                            <input onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
                            <div className="forgot-password"> <a>Forgot password?</a></div>
                        </label>
                        <hr></hr>
                        <div className="button-submit"></div>
                        <button type="submit">Sign-in</button>


                    </form>
                </div>

            </div>

        </div>
    )
}
Opgave.propTypes = {
    setToken: PropTypes.func.isRequired
};