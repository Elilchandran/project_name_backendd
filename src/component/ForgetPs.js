import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ForgetPs = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/reset-password-request', { email });
      if (response.status === 200) {
        setMessage('Password reset link sent to your email.');
      }
    } catch (error) {
      setMessage('Failed to send password reset link. Please try again.');
      console.error('Error sending password reset link:', error);
    }
  };
  

  return (
    <main className="bg-white">
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header">
                      <h3 className="text-center font-weight-light my-4">Password Recovery</h3>
                    </div>
                    <div className="card-body">
                      <div className="small mb-3 text-muted">
                        Enter your email address and we will send you a link to reset your password.
                      </div>
                      <form onSubmit={handlePasswordReset}>
                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label>Email address</label>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                          <Link className="small" to="/login">
                            Return to login
                          </Link>
                          <button type="submit" className="btn btn-primary">
                            Reset Password
                          </button>
                        </div>
                      </form>
                      {message && <div>{message}</div>}
                    </div>
                    <div className="card-footer text-center py-3">
                      <div className="small">
                        <Link to="/register" className="small">
                          Need an account? Sign up!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div id="layoutAuthentication_footer">
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
      </div>
    </main>
  );
};

export default ForgetPs;
