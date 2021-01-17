import React, {Component} from 'react';
import './Extra.css';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

class Extra extends Component {
  render(){
    return(

     
      <a onClick="console.log('Hello')" class="btn extra-btn card card-square extra-card"> <i class="fas fa-heart">
      </i>
      <br></br>
      <h1 class="extra-h1"> <b>Health</b>  </h1> 
      </a>
      
      
        // <div className="card bg-dark text-white sign-card card-square">
        // </div>
    );
  }
}

export default Extra;