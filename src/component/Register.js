// Register.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const { dispatch } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (name, email, password) => {
    try {
      const response = await axios.post('https://backend-e88g.onrender.com/register', { name, email, password });
      if (response.status === 200) {
        dispatch({ type: 'SOME_ACTION_FOR_REGISTRATION' });
        setSuccessMessage('Registration successful!'); // Set success message
        navigate('/login');
      }
    } catch (error) {
      setError('Registration failed. Please try again.'); // Set error message
      console.error('Registration failed:', error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      handleRegister(name, email, password);
    }
  };

    return (
        <div className="bg-white">
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header">
                                            <h3 className="text-center font-weight-light my-4">Create Account</h3>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-floating mb-3">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Enter your first name"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                    />
                                                    <label>First name</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input
                                                        className="form-control"
                                                        type="email"
                                                        placeholder="name@example.com"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        autoComplete='current-email'
                                                    />
                                                    <label>Email address</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input
                                                        className="form-control"
                                                        type="password"
                                                        placeholder="Create a password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        autoComplete='current-password'
                                            
                                                    />
                                                    <label>Password</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                <input
                                                    className="form-control"
                                                    type="password"
                                                    placeholder="Confirm password"
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                    autoComplete='current-confirm password'
                                                />
                                                    <label>Confirm Password</label>
                                                    {error && <div className="alert alert-danger">{error}</div>}
                                                    {successMessage && <div className="alert alert-success">{successMessage}</div>}
                                                </div>
                                                <div className="mt-4 mb-0">
                                                    <div className="d-grid">
                                                        <button type="submit" className="btn btn-primary btn-block">
                                                            Create Account
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer text-center py-3">
                                            <div className="small">
                                                <Link to="/login">Have an account? Go to login</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
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
    );
};

export default Register;
