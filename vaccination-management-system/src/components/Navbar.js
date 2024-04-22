import React from 'react';
import { NavLink } from "react-router-dom";
import { useAuthContext } from '../pages/Auth/hooks/useAuthContext';
import "./Navbar.css";

function Navbar() {
  const { dispatch } = useAuthContext(); 
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <nav className="nav">
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/CenterVaccines">Vaccines</NavLink>
      <NavLink to="/ListCenters">CENTERS</NavLink>
      <NavLink to="/ViewCertificate">viewCertificate</NavLink>

      <NavLink onClick={handleLogout} to="/login">LOGOUT</NavLink>
    </nav>
  );
}

export default Navbar;
