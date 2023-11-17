import React, { useEffect, createContext, useReducer, useContext } from 'react';

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
};

if (localStorage.getItem('isAuthenticated')) {
  initialState.isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));
}

if (localStorage.getItem('user')) {
  const userString = localStorage.getItem('user');
  try {
    const parsedUser = JSON.parse(userString);
    initialState.user = parsedUser !== null ? parsedUser : null;
  } catch (error) {
    console.error('Error parsing user:', error);
    initialState.user = null;
  }
}

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: {
          ...action.payload, // Including user data like name, email, etc.
          email: action.payload.email, // Changing 'userId' to 'email'
        },
      };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    localStorage.setItem('isAuthenticated', state.isAuthenticated);
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.isAuthenticated, state.user]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
