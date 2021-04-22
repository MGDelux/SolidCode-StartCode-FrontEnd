import "./style2.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  } from "react-router-dom";
  import {MyComponent,GetNorris, Getrandom, Starwars,CatFact}from "./test.js";

  export default function BasicExample() {
    return (
        <>
      <Router>
        <div>
          <ul className="header">
            <li>
            <NavLink exact activeClassName="selected" to="/">Home</NavLink>
            </li>
            <li>
            <NavLink exact activeClassName="selected" to="/Endpoint1">All</NavLink>
            </li>
            <li>
            <NavLink exact activeClassName="selected" to="/Endpoint2">Chuck Norris</NavLink>
            </li>
            <li>
            <NavLink exact activeClassName="selected" to="/Endpoint3">Random joke</NavLink>
            </li>
            <li>
            <NavLink exact activeClassName="selected" to="/Endpoint4">Starwars ships</NavLink>
            </li>
            <li>
            <NavLink exact activeClassName="selected" to="/Endpoint5">Cat Fact</NavLink>
            </li>
          </ul>
  
          <hr />
  
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <div className="content"></div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Endpoint1">
              <Endpoint1 />
            </Route>
            <Route path="/Endpoint2">
              <Endpoint2 />
            </Route>
            <Route path="/Endpoint3">
              <Endpoint3 />
            </Route>
            <Route path="/Endpoint4">
              <Endpoint4 />
            </Route>
            <Route path="/Endpoint5">
              <Endpoint5 />
            </Route>
          </Switch>
        </div>
      </Router>
      </>
    );
  }
  
  // You can think of these components as "pages"
  // in your app.
  
  function Home() {
    return (
      <div>
        <h2>Home</h2>
        <p>We got 4 different endpoints wich can be selected in the different tabs in the navbar</p>
      </div>
    );
  }
  
  function Endpoint1() {
    return (
      <div>
        <h2>All persons</h2>
        <MyComponent/>
      </div>
    );
  }
  
  function Endpoint2() {
    return (
      <div>
        <h2>Chuck Norris joke</h2>
        <GetNorris/>
      </div>
    );
    }
  function Endpoint3() {
      return (
        <div>
          <h2>Random joke</h2>
          <Getrandom/>
        </div>
      );
    }
    function Endpoint4() {
      return (
        <div>
          <h2>Starwars ships</h2>
          <Starwars/>
        </div>
      );
  }
  function Endpoint5() {
    return (
      <div>
        <h2>Cat fact</h2>
        <CatFact/>
      </div>
    );
}
