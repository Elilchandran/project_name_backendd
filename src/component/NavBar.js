import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext'; 

function NavBar({ toggleSidebar}) {
  const location = useLocation();
  const { dispatch } = useAuth(); 

  const excludedPaths = ['/login', '/register', '/forgetps'];
  const isExcludedPage = excludedPaths.includes(location.pathname);
  
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' }); 
  };


  if (isExcludedPage) {
    return null; 
  }
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      {/* Navbar Brand */}
      <a className="navbar-brand ps-3" href="index.html">
        Student Portal
      </a>

      {/* Sidebar Toggle */}
      <button
        className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
        id="sidebarToggle"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Navbar Search */}
      <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Search for..."
            aria-label="Search for..."
            aria-describedby="btnNavbarSearch"
          />
          <button className="btn btn-primary" id="btnNavbarSearch" type="button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>

      {/* Navbar User Menu */}
      <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            href="javascriptvoid(0)"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faUser} />
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            {/* <li>
              <a className="dropdown-item" href="javascriptvoid(0)">
                Settings
              </a>
            </li> */}
  {/* <li>
              <a className="dropdown-item" href="javascriptvoid(0)">
                Activity Log
              </a>
            </li>*/}
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
            <Link to="/logout" onClick={handleLogout} className="dropdown-item">
                Logout
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
