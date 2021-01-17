import React, {Component} from 'react';
import Extra from '../extra/Extra'
import "bootstrap/dist/css/bootstrap.min.css";
import './EmptyGoal.css';
import { Modal, Button } from "react-bootstrap";
import plus from "./plus.svg";

class EmptyGoal extends Component {
  state = {
    isOpen: false
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  render(){

    return(
      <div class="card yourGoals-card">
        <div class="card-body yourGoals-card-body">

          <div className="row">
            <h1 class="col-sm emptyGoal-h1 goal-col"><b>{this.props.num} Empty</b> </h1>
          <div>

          <div className="col-sm goal-col">
          {/* <a onClick="console.log('Hello')" class="btn btn-dark float-right goals-btn"><img src={plus} className="goal-img"></img> </a> */}
       
          <>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <Button className="btn-dark" variant="primary" onClick={this.openModal}>
              <img src={plus} className="goal-img"></img>
          </Button>
        </div>
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <div class="row"> 
          <div class="col-sm">
          <Extra />
          <Extra />
          </div>
          
          
          </div>
          
        </Modal>
      </>
        
          </div>
          </div>
          </div>
        </div>
    </div>
    );
  }
}

export default EmptyGoal;