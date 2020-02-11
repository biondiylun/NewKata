import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const number = 10;
  function increment() {
    number++
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>{number}</p>
        <button onclick="increment()">ABC</button>
      </header>
    </div>
  );
}

export default App;
