import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from './pages/Auth/AuthContext'; // Import AuthContextProvider
import AddVaccinationCenter from './pages/Admin/AddVaccinationCenter';
import AddVaccine from './pages/Admin/AddVaccine';
import CenterDetails from './pages/Admin/CenterDetails';
import ManageCenters from './pages/Admin/ManageCenters';
import ManageUsers from './pages/Admin/ManageUsers';
import VaccinesDetails from './pages/Admin/VaccinesDetails';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import ListCenters from './pages/Patient/ListCenters';
import PatientCenterDetails from './pages/Patient/PatientCenterDetails';
import PatientVaccineDetails from './pages/Patient/PatientVaccineDetails';
import ViewCertificate from './pages/Patient/ViewCertificate';
import CenterVaccines from './pages/VaccinationCenter/CenterVaccines';
import PatientList from './pages/VaccinationCenter/PatientList';
import UploadCertificate from './pages/VaccinationCenter/UploadCertificate';
import UpdateCenter from './pages/Admin/UpdateCenter';
import UpdateVaccine from './pages/Admin/UpdateVaccine';
import Page404 from './pages/Page404';

function App() {
  return (
    <AuthContextProvider> {/* Wrap your application with AuthContextProvider */}
      <div className="App">
        <ToastContainer />
        <div className="pages">
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/AddVaccinationCenter" element={<AddVaccinationCenter />} />
              <Route path="/AddVaccine" element={<AddVaccine />} />
              <Route path="/CenterDetails/:id" element={<CenterDetails />} />
              <Route path="/ManageCenters" element={<ManageCenters />} />
              <Route path="/ManageUsers" element={<ManageUsers />} />
              <Route path="/VaccinesDetails/:id" element={<VaccinesDetails />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/ListCenters" element={<ListCenters />} />
              <Route path="/PatientCenterDetails/:id" element={<PatientCenterDetails />} />
              <Route path="/PatientVaccineDetails/:id" element={<PatientVaccineDetails />} />
              <Route path="/ViewCertificate" element={<ViewCertificate />} />
              <Route path="/CenterVaccines" element={<CenterVaccines />} />
              <Route path="/PatientList" element={<PatientList />} />
              <Route path="/UploadCertificate" element={<UploadCertificate />} />
              <Route path="/UpdateCenter/:id" element={<UpdateCenter />} />
              <Route path="/UpdateVaccine/:id" element={<UpdateVaccine />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Router>
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;
