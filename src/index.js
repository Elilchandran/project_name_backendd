import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import './App.css'
import { AuthProvider } from './component/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);


