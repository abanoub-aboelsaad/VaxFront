import React from 'react';
import Navbar from '../../components/Navbar';

function VaccinesDetails() {
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
        <button className='update'>Update</button>
          <button className='delete'>DELETE</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default VaccinesDetails
