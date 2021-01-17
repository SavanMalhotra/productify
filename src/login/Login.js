import React, {Component, useContext, useCallback} from 'react';
import { withRouter, Redirect } from "react-router";
import logo from '../app/logo.svg';
import './login.css';
import SignIn from  '../signin/SignIn';
import { AuthContext } from '../Auth';


const Login = () => {

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container-fluid">
      <div className="App-header">
          <div className="row App-row">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-main">
              <SignIn imgURL="https://cdn.discordapp.com/attachments/797235409121312780/799926014762942484/pngtree-flow-spherical-apple-style-apple-wallpaper-image_40274.jpg" title="Google" disc="SIGN IN" disc2="WITH GOOGLE" google={true}/>
              <br></br>
              <br></br>
              <SignIn imgURL="https://cdn.discordapp.com/attachments/797235409121312780/799925289009676298/8ca0aca7112d219c761723acdaa4e0d0.jpg" title="Apple" disc="SIGN IN" disc2="WITH APPLE" google={false}/>
            </div>
          </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
