import React, {Component} from 'react';
import './signIn.css';
import firebase from "../firebase.js";

class SignIn extends Component {
  google() {
    try {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    } catch (error) {
      alert(error);
    }
  }

  apple() {
    alert("Your Browser Does Not Support This Method. Please Try Another Method!");
  }
  
  render(){
    return(
        <div className="card bg-dark text-white sign-card">
          <img className="card-img sign-card-img " src={this.props.imgURL} alt="img"></img>
              <div className="card-img-overlay sign-card-img-overlay">
                  <h1 class="signIn-h1"> <b>{this.props.title}</b> </h1>
                  <hr></hr>
                  <h2 class="signIn-h2"><b>{this.props.disc}</b> </h2>
                  <h2 class="signIn-h2"><b> {this.props.disc2}</b> </h2>
                  
                  <a onClick={ this.props.google ? this.google: this.apple } class="btn btn-light"> <b>Sign In</b></a>
              </div>
        </div>
    );
  }
}

export default SignIn;