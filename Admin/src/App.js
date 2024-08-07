import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login'
import Dashborad from './component/Dashboard'
import AdminProfile from './component/AdminProfile'
import Booking from './component/Booking'
import DeliveryTimeSlot from './component/DeliveryTimeSlot'
import FuelWorkCity from './component/FuelWorkCity'
import ManageCtegory from './component/ManageCtegory'
import Notification from './component/Notification'
// import SideBar from './component/SideBar'
import Setting from './component/Setting'
import Drivers from './component/user/Drivers'
import User from './component/user/User'

function App() {
  return (
    <Routes>
      <Route path='/'exact Component={Login}/>
      {/* <Route path='/sidebar' Component={SideBar}/> */}
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
    </Routes>
    
  );
}

export default App;
