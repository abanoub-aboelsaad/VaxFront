import React from 'react';
import Navbar from '../../components/Navbar';
// import styles from './ManageUsers.module.css';


function ManageUsers() {
  return (
    <div>
      <Navbar /> 
      
  
<div className='boddyyy'>
 
  <link rel="stylesheet" type="text/css" href="/assets/manageusers/ManageUsers.css" />
  <main className="table" id="customers_table">
    <section className="table__header">
    <h1>ManageUsers</h1>
      {/* <div className="input-group">
        <input type="search" placeholder="Search Data..." />
        <img src="images/search.png" alt />
      </div> */}
     
    </section>
    <section className="table__body">
      <table>
        <thead>
          <tr>
            <th>  </th>
            <th> UserName </th>
            <th> Email </th>
            <th> accept</th>
             <th> reject </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> 1 </td>
            <td> <strong> abanoub </strong></td>
            <td> abanoub@gmail.com </td>
            <td>
              <button className="status delivered">Accepted</button>
            </td>
            <td> <button className="status cancelled">Cancelled</button> </td>
          </tr>
          <tr>
            <td> 2 </td>
            <td> <strong> abanoub </strong></td>
            <td> abanoub@gmail.com </td>
            <td>
              <button className="status delivered">Accepted</button>
            </td>
            <td> <button className="status cancelled">Cancelled</button> </td>
          </tr>
         
        </tbody>
      </table>
    </section>
  </main>
</div>

    </div>
  );
}

export default ManageUsers;
