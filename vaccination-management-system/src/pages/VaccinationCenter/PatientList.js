import React from 'react';
import Navbar from '../../components/Navbar';

function PatientList() {
  return (
    <div>
      <Navbar />
      

       <div className='boddyyy'>
 
 <link rel="stylesheet" type="text/css" href="/assets/manageusers/ManageUsers.css" />
 <main className="table" id="customers_table">
   <section className="table__header">
   <h1>PatientList</h1>
    
   </section>
   <section className="table__body">
     <table>
       <thead>
         <tr>
           <th>  </th>
           <th> Patient Name </th>
           <th> vaccine </th>
           <th>  First dose</th>
            <th>  second dose </th>
            <th> upload cerificate </th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td> 1 </td>
           <td> <strong> abanoub </strong></td>
           <td> covid 19 </td>
           <td>
             <button className="status delivered">Aprove</button>
           </td>
           <td>
             <button className="status delivered">Aprove</button>
           </td>
           <td> <button className="status view">upload</button> </td>
         </tr>
         <tr>
           <td> 1 </td>
           <td> <strong> abanoub </strong></td>
           <td> covid 19 </td>
           <td>
             <button className="status delivered">Aprove</button>
           </td>
           <td>
             <button className="status delivered">Aprove</button>
           </td>
           <td> <button className="status view">upload</button> </td>
         </tr>
        
       </tbody>
     </table>
   </section>
 </main>
</div>


    </div>
  )
}

export default PatientList
