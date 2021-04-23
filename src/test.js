import React, { useState,useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import {button, Breadcrumb, Card, Form, Container, Row, Col,Table} from "react-bootstrap"
  
  function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
 
    useEffect(() => {
      fetch("http://localhost:8080/SolidCode-BackEnd/api/dummyAPI/all")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            console.log(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <container className="themed-container" fluid="md">
        <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
          <th scope="col">#ID</th>
             <th scope="col">Name</th>
             <th scope="col">Day</th>
             <th scope="col">Time</th>
        </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <>
          <tr >  
            <td key={item.id}>
            {item.id}
            </td>
            <td>{item.name}</td>
            <td>{item.date.date.year}/{item.date.date.month}/{item.date.date.day}  </td>
            <td>{item.date.time.hour}:{item.date.time.minute}:{item.date.time.second}</td>
            </tr>
           </>
          ))}
          </tbody>
          </Table>
          </container>
      );
    }
  }
  

  function GetNorris() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
 
    useEffect(() => {
      fetch("http://localhost:8080/SolidCode-BackEnd/api/dummyAPI/5endPoints")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            console.log(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Punline</th>
            <th scope="col">URL</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <>
          <tr>  
            <td key={item.chuck_Joke.id}>{item.chuck_Joke.id}</td>
            <td>{item.chuck_Joke.value}</td>
            <td>{item.chuck_Joke.url}</td>
          </tr>
           </>
          ))}
          </tbody>
          </Table>
      );
    }
  }
  
  
  function Getrandom() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
 
    useEffect(() => {
      fetch("http://localhost:8080/SolidCode-BackEnd/api/dummyAPI/5endPoints")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            console.log(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">joke</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <>
          <tr>  
            <td key={item.random_Joke.id}>{item.random_Joke.id}</td>
            <td>{item.random_Joke.joke}</td>
          </tr>
           </>
          ))}
          </tbody>
          </Table>
      );
    }
  }


  function Starwars() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
 
    useEffect(() => {
      fetch("http://localhost:8080/SolidCode-BackEnd/api/dummyAPI/5endPoints")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            console.log(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Model</th>
            <th scope="col">Manufacturer</th>
            <th scope="col">Cost_in_credits</th>
            <th scope="col">Length</th>
            <th scope="col">Crew</th>
            <th scope="col">Hyperdrive_rating</th>
            <th scope="col">Pilots</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <>
          <tr>  
            <td key={item.starWarsShip_INFO.name}>{item.starWarsShip_INFO.name  }</td>
            <td key={item.starWarsShip_INFO.model}>{item.starWarsShip_INFO.joke}</td>
            <td key={item.starWarsShip_INFO.manufacturer}>{item.starWarsShip_INFO.manufacturer}</td>
            <td key={item.starWarsShip_INFO.cost_in_credits}>{item.starWarsShip_INFO.cost_in_credits}</td>
            <td key={item.starWarsShip_INFO.length}>{item.starWarsShip_INFO.length}</td>
            <td key={item.starWarsShip_INFO.crew}>{item.starWarsShip_INFO.crew}</td>
            <td key={item.starWarsShip_INFO.hyperdrive_rating}>{item.starWarsShip_INFO.hyperdrive_rating}</td>
            <td key={item.starWarsShip_INFO.pilots}>{item.starWarsShip_INFO.pilots}</td>
          </tr>
           </>
          ))}
          </tbody>
          </Table>
      );
    }
  }

  function CatFact() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
 
    useEffect(() => {
      fetch("http://localhost:8080/SolidCode-BackEnd/api/dummyAPI/5endPoints")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            console.log(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Info</th>
            <th scope="col">CreatedAt</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <>
          <tr>  
            <td key={item.catFact._id}>{item.catFact.id}</td>
            <td>{item.catFact.text}</td>
            <td>{item.catFact.createdAt}</td>
          </tr>
           </>
          ))}
          </tbody>
          </Table>
      );
    }
  }


  export {GetNorris};
  export {MyComponent};
  export {Getrandom};
  export {Starwars};
  export {CatFact};

