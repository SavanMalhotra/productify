import React, {Component} from 'react';
import './YourGoals.css';

class YourGoals extends Component {
  render(){
    return(
      <div class="card yourGoals-card">
        <div class="card-body yourGoals-card-body">

          <div className="row">
            <h1 class="col-sm yourGoals-h1 goal-col"><b>{this.props.num}     {this.props.title}</b> </h1>
          <div>

          <div className="col-sm goal-col">
          <a onClick="console.log('Hello')" class="btn btn-dark float-right goals-btn"> <i class="fas fa-cog "></i> </a>

          <a onClick="console.log('Hello')" class="btn btn-dark float-right goals-btn"> <i class="fas fa-cog "></i> </a>
          </div>
          </div>
          </div>
        </div>
    </div>
    );
  }
}

export default YourGoals;