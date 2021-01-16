import './front.css';
import SignIn from  '../signin/SignIn';
import YourGoals from '../YourGoals/YourGoals';
import Info from '../Info/Info'

function Front() {
  return (
    <div className="container-fluid">
         <div className="row">

            <div className="col-sm float-left">
                <h1 class="front-h1"><b>Hi, Brian</b></h1> 
            </div>

            <div className="col-sm front-button">
            <a onClick="console.log('Hello')" class="btn btn-long float-right"> Logout</a>
            <a onClick="console.log('Hello')" class="btn btn-dark float-right"> <i class="fas fa-cog "></i> </a>
            <a onClick="console.log('Hello')" class="btn btn-dark float-right"> <b><i class="far fa-moon"></i></b></a>
            </div>

            </div>

            <div className="row">
                <div className="col-sm float-left">
                  <h2 className="front-h2"> Your Goals</h2>
                 <div className="horizontal-center">

                  <YourGoals num="1." title="Drink More Water"/>
                  <YourGoals num="2." title="More Exercise"/>
                  <YourGoals num="3." title="Empty"/>
                  <YourGoals num="4." title="Empty"/>
                  <YourGoals num="5." title="Empty"/>
                  </div>
                </div>

                <div className="col-sm float-right">
                  <div className="horizontal-center">
                    <br></br>
                    
                    <Info />

                  </div>
                </div>
            </div>

        </div>
  );
}

export default Front;
