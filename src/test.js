import React, { useState,useEffect } from "react"
import Table from 'react-bootstrap/Table';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>
  
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
        
        <table striped bordered hover variant="dark">
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
          <tr>  
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
          </table>
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
        
        <table striped bordered hover variant="dark">
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
            <td key={item.chuck_Joke.value}>{item.chuck_Joke.value}</td>
            <td key={item.chuck_Joke.url}>{item.chuck_Joke.url}</td>
          </tr>
           </>
          ))}
          </tbody>
          </table>
      );
    }
  }

  export {GetNorris};
  export {MyComponent};
