//import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  const name = fetch('https://swapi.py4e.com/api/people/1')
      .then(response => response.json())
  return (
    //<img src={'https://robohash.org/{name}'}/>
      <div>
        <img src={'https://robohash.org/{name}'}/>
          <p> Hi I am robo</p>
      </div>
  );
}

export default App;
