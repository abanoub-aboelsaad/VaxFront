import React from 'react';
import Navbar from '../../components/Navbar';
// import ""

function CenterDetails() {
  return (
    <div>
      <Navbar />
      <link rel="stylesheet" href="/assets/centerdetails/CenterDetails.css"></link>
     
       <h1>CenterDetails:</h1>
       <div className="container">
  <div className="product-card">
    <div className="image">
      <img src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTmAjfYiyYhKFdlJMZEIRQs_d-zikMcv7HP6Na9fMQAV_42s2oxipTOmbtxMSRSwCydzs86OFtvUGQeVbsK1N3COe7w7XbLzZ1LtEk4gw" alt />
    </div>
    <div className="card-content">
      <h3>CAIRO VACCINATION CENTER</h3>
      <p>HADAYEK HELWAN</p>
      <div className="store-purchase">
        <div className="price">0122222222222</div>
        <div className="buy">
          <button className='update'>Update</button>
          <button className='delete'>DELETE</button>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
        <h1 className='middleh'>HERE YOU ARE MANGE THIS CENTER'S VACCINES ADMIN</h1>

      
        </div>

        <div className='all'>
<div className="gallery">
 <div className="contenttt">
   <img className='photocent' src="/photo.png" alt="photo" />
   <h3 className="header">Vaccine </h3>
   <button className="buy-3">MODIFY Vaccine</button>
 </div>
    </div> 
    
    <div className="gallery">
 <div className="contenttt">
   <img className='photocent' src="/photo.png" alt="photo" />
   <h3 className="header">Vaccine </h3>
   <button className="buy-3">MODIFY Vaccine</button>
 </div>
    </div> 

    <div className="gallery">
 <div className="contenttt">
   <img className='photocent' src="/photo.png" alt="photo" />
   <h3 className="header">Vaccine </h3>
   <button className="buy-3">MODIFY Vaccine</button>
 </div>
    </div> 

    <div className="gallery">
 <div className="contenttt">
   <img className='photocent' src="/photo.png" alt="photo" />
   <h3 className="header">Vaccine </h3>
   <button className="buy-3">MODIFY Vaccine</button>
 </div>
    </div> 

    <div className="gallery">
 <div className="contenttt">
   <img className='photocent' src="/photo.png" alt="photo" />
   <h3 className="header">Vaccine </h3>
   <button className="buy-3">MODIFY Vaccine</button>
 </div>
    </div> 
   

    
    </div>   
   <div className='buton'>
   <button className='add'>ADD VACCINE</button> 
    
   
          </div>

    </div>    
   
  )
}

export default CenterDetails
 