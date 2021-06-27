import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/login/Login';
import useToken from './components/token/UseToken';
import Register from './components/register/register';

function App() {
  const { token, setToken } = useToken();
  const { reg, setReg } = useToken(false);


  if(!token) {
    return  <Login setToken={setToken} />
   
  }


  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;