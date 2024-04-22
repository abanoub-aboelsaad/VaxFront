import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddVaccinationCenter() {
  const [formData, setFormData] = useState({
    Name: '',
    Address: '',
    ContactInfo: '',
    ManagerId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/VaccinationCenter', formData)
    .then(response => {
      console.log('Vaccination center added successfully:', response.data);
      toast.success('Vaccination center added successfully');
    })
    .catch(error => {
      console.error('Error adding vaccination center:', error);
      toast.error('Failed to add vaccination center');
    });
  };

  return (
    <div>
      <Navbar />
      <div className='bodyy'>
        <div className="bashcontainer">
          <h2>Add Vaccination Center</h2>
          <form onSubmit={handleSubmit} className="vaccination-center-form">
            <div className="form-group">
              <label htmlFor="Name">Center Name</label>
              <input type="text" id="Name" name="Name" value={formData.Name} onChange={handleChange} placeholder="Enter name" required />
            </div>
            <div className="form-group">
              <label htmlFor="Address">Address</label>
              <input type="text" id="Address" name="Address" value={formData.Address} onChange={handleChange} placeholder="Enter address" required />
            </div>
            <div className="form-group">
              <label htmlFor="ContactInfo">Contact Info</label>
              <input type="text" id="ContactInfo" name="ContactInfo" value={formData.ContactInfo} onChange={handleChange} placeholder="Enter contact info" required />
            </div>
            <div className="form-group">
              <label htmlFor="ManagerId">Manager Id</label>
              <input type="text" id="ManagerId" name="ManagerId" value={formData.ManagerId} onChange={handleChange} placeholder="Enter manager ID" required />
            </div>
            <input type="submit" className="btnn" value="Add Center" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddVaccinationCenter;














