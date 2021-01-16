import React, {Component} from 'react';
import './signIn.css';

class signIn extends Component {
  render(){
    return(
        <div className="card bg-dark text-white">
          <img className="card-img" src="google-background.png" alt="Google"></img>
              <div className="card-img-overlay">
                  <h5 className="card-title">Google</h5>
                  <p className="card-text">SIGN IN</p>
                  <p className="card-text">WITH GOOGLE</p>
                  <a onClick="console.log('Hello')" class="btn btn-light">Sign In</a>
              </div>
        </div>
    );
  }
}

export default signIn;