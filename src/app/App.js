import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from  '../signin/SignIn';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-main">
          <SignIn/>
        </div>
      </div>
    </div>
  );
}

export default App;
