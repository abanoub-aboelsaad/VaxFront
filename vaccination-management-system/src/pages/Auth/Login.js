import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext'; 
import Navbar from '../../components/Navbar';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { dispatch } = React.useContext(AuthContext); // Access AuthContext
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/account/login', {
        username,
        password
      });
  
      if (response && response.data.token) {
        // Dispatch LOGIN action with the entire response data
        dispatch({ type: 'LOGIN', payload: response.data });
        // Redirect to the appropriate page
        navigate('/ViewCertificate'); // Change '/ViewCertificate' to the desired URL
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    
   <div> 
    
    <Navbar />
    <div className="loginBackground">
      
   <div className="login-boxv">
     <h2>Login</h2>
     <form onSubmit={handleSubmit}>
       <div className="user-boxv">
         <input
           type="text"
           name="username"
           value={username}
           onChange={handleUsernameChange}
           required
         />
         <label>Username</label>
       </div>
       <div className="user-boxv">
         <input
           type="password"
           name="password"
           value={password}
           onChange={handlePasswordChange}
           required
         />
         <label>Password</label>
       </div>
       {error && <p className="error">{error}</p>}
       <button type="submit">Submit</button>
     </form>
   </div>
 </div></div>
  );
}

export default Login;
