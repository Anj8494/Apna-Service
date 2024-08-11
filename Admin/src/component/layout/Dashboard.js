import { Book,CachedOutlined,Person,Person2,Search} from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [statistics, setStatistics] = useState({
    totalUsers: 388,
    totalDrivers: 3,
    bookingNotAssigned: 52,
  });
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([
    {
      id: 1,
      customerName: "Anjali",
      plan: "Test",
      driverName: "Assign/Choose Driver",
      fuelType: "Test",
      fuelPrice: "$20.00",
      deliveryAddress: "Indore, Madhya Pradesh, India",
    },
    {
      id: 2,
      customerName: "abhi",
      plan: "Test",
      driverName: "Assign/Choose Driver",
      fuelType: "Test",
      fuelPrice: "$30.00",
      deliveryAddress: "Ujjain, Madhya Pradesh, India",
    },
    {
      id: 3,
      customerName: "shan",
      plan: "Test",
      driverName: "Assign/Choose Driver",
      fuelType: "Test",
      fuelPrice: "$10.00",
      deliveryAddress: "Bhopal, Madhya Pradesh, India",
    },
    {
      id: 4,
      customerName: "rj",
      plan: "Test",
      driverName: "Assign/Choose Driver",
      fuelType: "Test",
      fuelPrice: "$50.00",
      deliveryAddress: "Indore, Madhya Pradesh, India",
    },
    {
      id: 5,
      customerName: "radha",
      plan: "Test",
      driverName: "Assign/Choose Driver",
      fuelType: "Test",
      fuelPrice: "$70.00",
      deliveryAddress: "ratlam, Madhya Pradesh, India",
    },
  ]);
  return (
    <div>
      
    </div>
    // <div className="content-wrapper">
    //     <div className="main-con">
    //       <div className="dashboard">
    //         <div className="profile">
    //           <span>Admin</span>
    //           <div className="profile-pic ">
    //           <img src="https://w7.pngwing.com/pngs/555/703/png-transparent-computer-icons-avatar-woman-user-avatar-face-heroes-service-thumbnail.png" 
    //              alt="profile" className="pic" onClick={()=>navigate('/adminprofile')}/>
    //           </div>
    //         </div>
    //         <div className="top-bar">
    //           <div className="statistics">
    //             <h3 className="head">Statistics</h3>
    //             <div className="stat-item">
    //               <Person className="icons" />
    //               <h3>{statistics.totalUsers}</h3>
    //               <p> Total Users</p>
    //             </div>
    //             <div className="stat-item">
    //               <Person2 className="icons" />
    //               <h3>{statistics.totalDrivers}</h3>
    //               <p>Total Drivers</p>
    //             </div>
    //             <div className="stat-item">
    //               <Book className="icons" />
    //               <h3>{statistics.bookingNotAssigned}</h3>
    //               <p>Booking Not Assigned</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="search-bar">
    //             <input type="text" placeholder="Search"/>
    //             <button className="search-button"><Search/></button>
    //             <button className="reload"><CachedOutlined/></button>
    //         </div>

    //         <div className="col-12">
    //           <div className="card">
    //             <div className="heading">
    //             <h3>Pending Booking</h3>
    //             <p>Showing 1-6 of 29</p>
    //             </div>
    //             <div className="table-responsive">
    //               <table className="table">
    //                 <thead className="table-light">
    //                   <tr>
    //                     <th className="text-truncate">S.No</th>
    //                     <th className="text-truncate">CUSTOMER NAME</th>
    //                     <th className="text-truncate">PLAN</th>
    //                     <th className="text-truncate">DRIVER NAME</th>
    //                     <th className="text-truncate">FUEL TYPE</th>
    //                     <th className="text-truncate">FUEL PRICE</th>
    //                     <th>DELIVERY ADDRESS</th>
    //                   </tr>
    //                 </thead>
    //                 <tbody>
    //                   {bookings?.map((booking, index) => (
    //                     <tr>
    //                       <td>
    //                         <div className="d-flex align-items-center">
    //                           <div>
    //                             <td>{booking.id}</td>
    //                           </div>
    //                         </div>
    //                       </td>
    //                       <td className="text-truncate">
    //                         <h6>{booking.customerName}</h6>
    //                       </td>
    //                       <td className="text-truncate">{booking.plan}</td>
    //                       <td className="text-truncate">
    //                         {booking.driverName}
    //                       </td>
    //                       <td className="text-truncate">{booking.fuelType}</td>
    //                       <td className="text-truncate">{booking.fuelPrice}</td>
    //                       <td>{booking.deliveryAddress}</td>
    //                     </tr>
    //                   ))}
    //                 </tbody>
    //               </table>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
  );
};
export default Dashboard;
