import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines,faListCheck} from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const location = useLocation();

  const excludedPaths = ['/login', '/register', '/forgetps'];
  const isExcludedPage = excludedPaths.includes(location.pathname);

  if (isExcludedPage) {
    return null; 
  }

  return (
    <div id="layoutSidenav_nav">
      <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <Link className="nav-link" to="/dashboard">
              <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
              Dashboard
            </Link>

            {/* Profile Settings */}
            {/* <a
              className="nav-link collapsed"
              href="javascriptvoid(0)"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePages"
              aria-expanded="false"
              aria-controls="collapsePages"
            >
              <div>
                <FontAwesomeIcon icon={faGears} />
              </div>
              &nbsp; Settings
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down"></i>
              </div>
            </a>
            <div
              className="collapse"
              id="collapsePages"
              aria-labelledby="headingTwo"
              data-bs-parent="#sidenavAccordion"
            >
              <nav
                className="sb-sidenav-menu-nested nav accordion"
                id="sidenavAccordionPages"
              >
                <a
                  className="nav-link collapsed"
                  href="javascriptvoid(0)"
                  data-bs-toggle="collapse"
                  data-bs-target="#pagesCollapseAuth"
                  aria-expanded="false"
                  aria-controls="pagesCollapseAuth"
                >
                  Authentication
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="pagesCollapseAuth"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordionPages"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                    <Link className="nav-link" to="/register" >
                      Register
                    </Link>
                    <Link className="nav-link" to="/forgetps" >
                      Forgot Password
                    </Link>
                  </nav>
                </div>
              </nav>
            </div>
             */}
            <div className="sb-sidenav-menu-heading">Task Details</div>
            {/* My Chart page */}
            {/* <Link to="/donut" className="nav-link">
              <div className="sb-nav-link-icon">
                <i className="fas fa-chart-area"></i>
              </div>
              Status
            </Link> */}
            {/* Bar Chart page */}
            {/* <Link to="#!" className="nav-link">
              <div className="sb-nav-link-icon">
                <i className="fas fa-table"></i>
              </div>
              Bar Chart
            </Link> */}
            {/* Task Details page */}
             <Link to="/tasksubmit" className="nav-link">
              <div>
                <FontAwesomeIcon icon={faListCheck} />
              </div>
              &nbsp; Submission Page
            </Link> 
            {/* Syllabus page */}
            <Link to="/syllubus" className="nav-link">
              <div>
                <FontAwesomeIcon icon={faFileLines} />
              </div>
              &nbsp; Syllabus
            </Link>
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          Student
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
