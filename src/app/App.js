import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from  '../signin/SignIn';


function App() {
  return (
    <div className="container-fluid">
     
      <div className="App-header">
        
          <div className="row App-row">
            <img src={logo} className="App-logo" alt="logo" />
              <div className="App-main">
                <SignIn imgURL="https://cdn.discordapp.com/attachments/797235409121312780/799926014762942484/pngtree-flow-spherical-apple-style-apple-wallpaper-image_40274.jpg" title="Google" disc="SIGN IN" disc2="WITH GOOGLE"/>
                <br></br>
                <br></br>
                <SignIn imgURL="https://cdn.discordapp.com/attachments/797235409121312780/799925289009676298/8ca0aca7112d219c761723acdaa4e0d0.jpg" title="Apple" disc="SIGN IN" disc2="WITH APPLE"/>
              
                
              </div>
              
          </div>
        </div>
    </div>
  );
}

export default App;
