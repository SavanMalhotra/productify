import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import Front from './front/Front'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home"; 
import Login from "./login/Login"
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
// import anime from 'animejs/lib/anime.es.js';

ReactDOM.render(
  <React.StrictMode>
    {/* <Front /> */}
    {/* <App /> */}
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </AuthProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
