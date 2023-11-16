import React from 'react';
import { Link } from 'react-router-dom';
//import DoughnutChart from './DoughnutChart';
import  Task  from '../Sidebar/Task';

const Dashboard=()=> {

  return (
    <div  >
      <main>
        <div className="container-fluid px-4">
          <h1 className="mt-4">Dashboard</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">Daily Progress</li>
          </ol>
          
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="card bg-primary text-white mb-4">
                  <div className="card-body">Completed Task</div>
                  <div className="card-footer d-flex align-items-center justify-content-between">
                    <Link to="/task" className="small text-white stretched-link">
                      {}
                    </Link>
                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6">
                <div className="card bg-warning text-white mb-4">
                  <div className="card-body">Submit Task </div>
                  <div className="card-footer d-flex align-items-center justify-content-between">
                    <Link to="/tasksubmit" className="small text-white stretched-link">
                      {}
                    </Link>
                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                  </div>
                </div>
              </div>
            </div>
            
          

          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">Activities</li>
          </ol>

          {/* <div className="row">
            <div className="col-md-6">
              <div className="chart-container w-100">
              <DoughnutChart  />
              </div>
            </div>
            <div className="col-md-6">
              <div className="chart-container w-100">
                Task Details
              </div>
            </div> 
          </div> */}

          <div className="card mb-4">
              <Task/>            
          </div>
        </div>
      </main>

      
      <footer className="py-4 bg-light mt-auto">
        <div className="container-fluid px-4">
          <div className="d-flex align-items-center justify-content-between small">
            <div className="text-muted">Copyright &copy; Your Website 2023</div>
            <div>
              <a href="#!">Privacy Policy</a>
              &middot;
              <a href="#!">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>
      </div>
    
  );
}

export default Dashboard;
