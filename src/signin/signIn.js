import React, {Component} from 'react';
import './signIn.css';

class SignIn extends Component {
  render(){
    return(
        <div className="card bg-dark text-white">
         
          <img className="card-img" src="https://cdn.discordapp.com/attachments/797930244983488533/799902586962575371/google.png" alt="Google"></img>
              <div className="card-img-overlay">
                  <h1> <b>Google</b> </h1>
                  
                  <h2 className="card-text"><b>SIGN IN</b> </h2>
                  <h2 className="card-text"><b>WITH GOOGLE </b> </h2>
                  
                  <a onClick="console.log('Hello')" class="btn btn-light">Sign In</a>
              </div>
        </div>
    );
  }
}

export default SignIn;