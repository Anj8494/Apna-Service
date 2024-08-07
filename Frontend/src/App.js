import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { BrowserRouter as Switch } from "react-router-dom";
import Login from './Pages/Auth/Login';
import Verification from './Pages/Auth/Verification';
import ServiceArea from './Pages/ServiceArea'
import Test from './Pages/Test'
import Need from './Pages/Need/Need';
import Profile from './Pages/User/Profile';
import Edit from './Pages/User/Edit';
import Equipment from './Pages/Need/Equipment';
import Boat from './Pages/Need/Boat';
import Personal from './Pages/Need/Personal';
import Vehicle from './Pages/Need/Vehicle';

function App() {
  return (
    <Routes>
         <Route path='/' exact Component={Login}/>
          <Route path='/verification' Component={Verification}/>
          <Route path='/servicearea' Component={ServiceArea}/>
          <Route path='/need' Component={Need}/>
          <Route path='/profile' Component={Profile}/>
          <Route path='/edit' Component={Edit}/>
          <Route path='/equipment' Component={Equipment}/>
          <Route path='/boat' Component={Boat}/>
          <Route path='personal' Component={Personal}/>
          <Route path='vehicle' Component={Vehicle}/>
          <Route path='/test' Component={Test}/>
    </Routes>
         
  );
}

export default App;
