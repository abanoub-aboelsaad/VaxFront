import { createContext, useReducer, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('auth', JSON.stringify(action.payload)); 
      return { username: action.payload.userName, token: action.payload.token }; 
    case 'LOGOUT':
      localStorage.removeItem('auth'); 
      return { username: null, token: null };
    default:
      return state;
  }
};

// Utility function to decode JWT token
export const decodeToken = (token) => {
  if (token) {
    return jwtDecode(token); 
  }
  return null;
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    username: null,
    token: null
  });

  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem('auth'));

    if (storedAuth) {
      dispatch({ type: 'LOGIN', payload: storedAuth });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch, decodeToken }}>
      {children}
    </AuthContext.Provider>
  );
};
