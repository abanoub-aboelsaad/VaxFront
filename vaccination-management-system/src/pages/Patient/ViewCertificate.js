import React, { useContext } from 'react';
import Navbar from '../../components/Navbar';
import { AuthContext } from '../Auth/AuthContext';

function ViewCertificate() {
  // Ensure that useContext is imported from React
  const { decodeToken, token } = useContext(AuthContext); 
  const decodedToken = decodeToken(token); 
  const userId = decodedToken ? decodedToken.nameid : null; 
console.log(token)
console.log(userId)
  const handleGetCertificate = () => {
    if (userId) {
      // Navigate to the URL that fetches the certificate photo
      window.location.href = `http://localhost:8080/api/Certificates/${userId}/photo`;
    } else {
      console.error('User ID not available');
     
    }
  };

  return (
    <div>
      <Navbar />
      <link rel="stylesheet" href="/assets/viewcertificate/ViewCertificate.css"></link> 
      <div>
        <main>
          <div className="VIEW_CERTIFICATE">
            <div className="certificate">
              <img src="https://media.istockphoto.com/id/1372288267/photo/doctor-in-protective-suit-medical-mask-gloves-holding-covid-19-vaccination-record-card-after.jpg?s=612x612&w=0&k=20&c=NiBlU7sIClwCXsfqj3P-mAM-jRTd9cjRH8oiSnFM2xs=" alt="Vaccination Certificate" />    
            </div>
          </div>
        </main>
        <button className="btn" onClick={handleGetCertificate}>Get Certificate</button>
      </div>
    </div>
  );
}

export default ViewCertificate;
