
import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext'; 
import Navbar from '../../components/Navbar';
function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useAuthContext(); 
  const navigate = useNavigate();

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you would call your API to handle sign up
    try {
      // Replace the following with your sign-up logic:
      // const result = await signUpService.signUp({ firstName, lastName, email, password });
      // if (result.success) {
      //   dispatch({ type: 'LOGIN', payload: result.user });
      //   navigate('/dashboard'); // Navigate to the dashboard or home page on successful sign up
      // } else {
      //   // Handle errors, e.g., display a message to the user
      // }
      console.log('Sign Up successful:', { firstName, lastName, email });
      // Mock dispatch and navigation after successful sign up
      dispatch({ type: 'LOGIN', payload: { firstName, lastName, email } });
      navigate('/'); 
    } catch (error) {
      console.error('Sign Up failed:', error);
    }
  };

  return (
 <div>
<Navbar/>
<div className="SignUpBackground">
    <div className="signup-boxv">
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-boxvv">
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
          <label>First Name</label>
        </div>
        <div className="user-boxvv">
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
          <label>Last Name</label>
        </div>
        <div className="user-boxvv">
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label>Email</label>
        </div>
        <div className="user-boxvv">
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <label>Password</label>
        </div>
        <button type="submit">
          <span />
          <span />
          <span />
          <span />
          Submit
        </button>      
        </form>
    </div>
  </div>

 </div>
  );
}

export default SignUp;
