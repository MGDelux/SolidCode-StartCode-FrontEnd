import React, { useState,useEffect } from "react"
import facade from "./apiFacade";
import test, {MyComponents,getNorris} from "./test";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BasicExample from "./Route";

function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);
 
  const performLogin = (evt) => {
    console.log("log in")
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  }
  const onChange = (evt) => {
    setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
  }
 
  return (
    <div>
      <h2>Login</h2>
      <form onChange={onChange} >
        <input placeholder="User Name" id="username" />
        <input placeholder="Password" id="password" type="password" />
        <button onClick={performLogin}>Login</button>
      </form>
    </div>
  )
 
}
function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState("Loading...")
  
  useEffect(
    () => {
    facade.fetchData().then(data=> setDataFromServer(data.msg));
  },
   [])
 
  return (
    <>
    
    <div>
      <h2>Data Received from server</h2>
      <h3>{dataFromServer}</h3>
    </div>
    <BasicExample/>
</>
  )
 
}
 


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
 
  const logout = () => { 
  facade.logout()
  setLoggedIn(false)
} 
  const login = (user, pass) => 
  {
    facade.login(user,pass)
    .then(res =>setLoggedIn(true));
   } 
 
  return (
    <div>
      {!loggedIn ? (<LogIn login={login} />) :
        (<div>
          <LoggedIn />
          <button onClick={logout}>Logout</button>
        </div>)}
    </div>
  )
 
 
}
export default App;
 
