import React, { useState } from 'react';
import PropTypes from 'prop-types';


async function RegisterUser(credentials) {
    console.log(credentials)
    const options = makeOptions("POST", {userName: credentials.username, userPass: credentials.password  })
    return fetch('http://localhost:8080/SolidCode-BackEnd/api/user/register', options)
      .then(data => data.json())
   }
export default function Register({ setToken }) {
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [invCode, SetInvCode] = useState("default");

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await RegisterUser({
          username,
          password,
          email,
          invCode
        });
        setToken(token);
      }
  return(
    <div className="login-wrapper">
     <img src="https://i.imgur.com/S6kcCO8.png"></img>
        <div className="login-container">
            <div><h1>Unnamed Project</h1></div>
      <h3>Register</h3>
      <div className="login-Form">
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username:</p>
          <input onChange={e => setUserName(e.target.value)} placeholder="User name" type="text" />
        </label>
        <label>
          <p>Email:</p>
          <input onChange={e => setEmail(e.target.value)} placeholder="Email" type="Email" required />
        </label>
        <label>
          <p>Password:</p>
          <input onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" required />

        </label>
        <hr></hr>
        <div className="button-submit"></div>
          <button type="submit">Register</button>
        <label>
          <p>Invite code:</p>
          <input onChange={e => SetInvCode(e.target.value)} placeholder="EbicC0d3" type="password"  />
          <div><p>Leave empty unless you have a code</p></div>

        </label>
      </form>
      </div>
   
      </div>
      
    </div>
  )
}
Register.propTypes = {
    setToken: PropTypes.func.isRequired
};
const makeOptions= (method,body) =>{
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        'Accept': 'application/json',
      }
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  }