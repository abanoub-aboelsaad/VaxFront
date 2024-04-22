import React from 'react';
import Navbar from '../../components/Navbar';

function PatientVaccineDetails() {
  return (
    <div>
      <Navbar />
      <link rel="stylesheet" href="/assets/vaccinedetails/VaccinesDetails.css"></link>
     
     <h1>VaccinesDetails</h1>
     <div className="container">
<div className="product-card">
  <div className="image">
    <img src="/photo.png" alt />
  </div>
  <div className="card-content">
    <h3>vaccine name</h3>
    <p>precautions</p>
    <div className="store-purchase">
      <div className="buy">
      <button className='dose'>Reserve first dose</button>
      <button className='dose'>Reserve second dose</button>
      </div>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default PatientVaccineDetails
