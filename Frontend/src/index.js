import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import Login from './Pages/Auth/Login'
import Verification from './Pages/Auth/Verification'
import Test from './Pages/Test'
import ServiceArea from './Pages/ServiceArea'
import Need from './Pages/Need/Need'
import Boat from './Pages/Need/Boat'
import Equipment from './Pages/Need/Equipment'
import Vehicle from './Pages/Need/Vehicle'
import Profile from './Pages/User/Profile';
import Edit from './Pages/User/Edit'
import Personal from './Pages/Need/Personal';
import App from './App'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <App/>
</BrowserRouter>


  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <BrowserRouter>
  // <Routes>
  //   <Route path='/' element={<Login/>}/>
  //   <Route path='/verification'  element={<Verification/>}/>
  //   <Route path='/servicearea' element={<ServiceArea/>}/>
  //   <Route path='/profile' element={<Profile/>}/>
  //   <Route path='edit' element={<Edit/>}/>
  //   <Route path='/test' element={<Test/>}/>
  //   <Route path='/need' element={<Need/>}/>
  //   <Route path='/boat' element={<Boat/>}/>
  //   <Route path='/equipment' element={<Equipment/>}/>
  //   <Route path='/personal' element={<Personal/>}/>
  //   <Route path='/vehicle' element={<Vehicle/>}/>
  // </Routes>
  // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
