import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from"./comp/Header"

function App() {
  return (
    <div>
      <Header name="Rajat Sahu" titel="First"/>
      <hr/>
      <Header  name="Vimal Batt" titel="Second"/>
      <hr/>
      <h1>Hey This is Rajat</h1>
      <p>I Createing this project for learn React</p>
      <hr/>
      <Header name="Pandey Pandey" titel=" Third"/>

    </div>
  );
}

export default App;
