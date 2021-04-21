import React, { useState,useEffect } from "react"


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
            console.log(items)
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
            {item.name},{item.date.date.year},{item.date.time.hour}:{item.date.time.minute}:{item.date.time.second}
            </li>
          ))}
        </ul>
        
      );
    }
  }
  export default MyComponent;