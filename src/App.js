import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './component/NavBar';
import Sidebar from './component/Sidebar/Sidebar';
import Login from './component/Login';
import Logout from './component/Logout';
import Register from './component/Register';
import ForgetPs from './component/ForgetPs';
import Dashboard from './component/Dashboard/Dashboard';
import DoughnutChart from './component/Dashboard/DoughnutChart';
import Syllubus from './component/Sidebar/Syllubus';
import Task from './component/Sidebar/Task';
import TasksSubmission from './component/Sidebar/TasksSubmission';
import { useAuth } from './component/AuthContext';


const App = () => {
  const { state: { isAuthenticated } } = useAuth();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    document.body.classList.toggle('sb-nav-fixed', true);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('sb-sidenav-toggled', isSidebarOpen);
  }, [isSidebarOpen]);

  return (
    <Router>
      <div id="layoutSidenav">
        {isAuthenticated && (
          <nav>
            <NavBar toggleSidebar={toggleSidebar} />
          </nav>
        )}
        <div id="layoutSidenav_nav">
          {isAuthenticated && <Sidebar />}
        </div>
        <div id="layoutSidenav_content">
          <Routes>
            <Route
              path="/"
              element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgetps" element={<ForgetPs />} />
            <Route path="/logout" element={<Logout />} />

            {isAuthenticated ? (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/donut" element={<DoughnutChart />} />
                <Route path="/task" element={<Task />} />
                <Route path="/tasksubmit" element={<TasksSubmission />} />
                <Route path="/syllubus" element={<Syllubus />} />
              </>
            ) : null}

            <Route path="*" element={<Navigate to="/404" />} />
            <Route path="/404" element={<h1>404 / Login Again</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
