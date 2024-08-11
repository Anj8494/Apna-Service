import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Auth/Login'
import Dashborad from './component/layout/Dashboard'
import AdminProfile from './component/Admin/AdminProfile'
import Booking from './component/Pages/Booking'
import DeliveryTimeSlot from './component/Pages/DeliveryTimeSlot'
import FuelWorkCity from './component/fuel/FuelWorkCity'
import ManageCtegory from './component/Pages/ManageCtegory'
import Notification from './component/Pages/Notification'
import Setting from './component/Pages/Setting'
import Drivers from './component/user/Drivers'
import User from './component/user/User'
import FuelForm from './component/fuel/FuelForm';
function App() {
  return (
    <Routes>
      <Route path='/'exact Component={Login}/>
      <Route path='/dashboard' Component={Dashborad}/>
      <Route path='/adminprofile' Component={AdminProfile}/>
      <Route path='/booking' Component={Booking}/>
      <Route path='/deliverytimeslot' Component={DeliveryTimeSlot}/>
      <Route path='/managectegory' Component={ManageCtegory}/>
      <Route path='/fuelworkcity' Component={FuelWorkCity}/>
      <Route path='/notification' Component={Notification}/>
      <Route path='/setting' Component={Setting}/>
      <Route path='/user' Component={User}/>
      <Route path='/drivers' Component={Drivers}/>
      <Route path='/fuelform' Component={FuelForm}/>
    </Routes>
    
  );
}

export default App;
