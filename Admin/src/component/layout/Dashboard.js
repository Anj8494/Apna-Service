import {
  Book,
  CachedOutlined,
  Person,
  Person2,
  Search,
} from "@mui/icons-material";
import "../../stylecomponent/dashboard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hearder from "./Hearder";
import SideBar from "./SideBar";
import Footer from "./Footer";
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
      plan: "---",
      driverName: "Assign/Choose Driver",
      fuelType: "Test",
      fuelPrice: "$20.00",
      deliveryAddress: "Indore, Madhya Pradesh, India",
    },
    {
      id: 2,
      customerName: "abhi",
      plan: "--",
      driverName: "Assign/Choose Driver",
      fuelType: "baik",
      fuelPrice: "$30.00",
      deliveryAddress: "Ujjain, Madhya Pradesh, India",
    },
    {
      id: 3,
      customerName: "shan",
      plan: "---",
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
      fuelType: "boat",
      fuelPrice: "$50.00",
      deliveryAddress: "Indore, Madhya Pradesh, India",
    },
    {
      id: 5,
      customerName: "radha",
      plan: "Test",
      driverName: "Assign/Choose Driver",
      fuelType: "car",
      fuelPrice: "$70.00",
      deliveryAddress: "ratlam, Madhya Pradesh, India",
    },
  ]);

  const [currentPage, setCurrentPage] = useState("");
  const entriesPerPage = 9;
  const totalPages = Math.ceil(bookings.length / entriesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = Math.min(startIndex + entriesPerPage, bookings.length);

  return (
    <div>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <SideBar />
          <div className="layout-page">
            <Hearder/>
            <div className="top-bar">
              <div className="statistics">
                <h3 className="head">Statistics</h3>
                <div className="stat-item">
                  <Person className="icons" />
                  <h3>{statistics.totalUsers}</h3>
                  <p> Total Users</p>
                </div>
                <div className="stat-item">
                  <Person2 className="icons" />
                  <h3>{statistics.totalDrivers}</h3>
                  <p>Total Drivers</p>
                </div>
                <div className="stat-item">
                  <Book className="icons" />
                  <h3>{statistics.bookingNotAssigned}</h3>
                  <p>Booking Not Assigned</p>
                </div>
              </div>
            </div>
            <div className="search-bar">
              <input type="text" placeholder="Search" />
              <button className="search-button">
                <Search />
              </button>
              <button className="reload">
                <CachedOutlined />
              </button>
            </div>

            <div class="content-wrapper">
              <div class="card">
                <div className="haedingdiv">
                  <h5 class="card-header">Pending Booking</h5>
                  <p className="card-p">Showing 1-25 of 61</p>
                </div>

                <div class="table-responsive text-nowrap">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>CUSTOMER NAME</th>
                        <th>PLAN</th>
                        <th>DRIVER NAME</th>
                        <th>FUEL TYPE</th>
                        <th>FUEL PRICE</th>
                        <th>DELIVERY ADDRESS</th>
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                      {bookings?.map((booking, index) => (
                        <tr>
                          <td>{booking.id}</td>
                          <td>{booking.customerName}</td>
                          <td>{booking.plan}</td>
                          <td>
                            <span class="badge rounded-pill bg-label-primary me-1">
                              {booking.driverName}
                            </span>
                          </td>
                          <td>{booking.fuelType}</td>
                          <td>{booking.fuelPrice}</td>
                          <td>{booking.deliveryAddress}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="pagination">
                    <div className="pagination-controls">
                      <button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                      >
                        Previous
                      </button>
                      {[...Array(totalPages).keys()].map((_, index) => {
                        const pageNumber = index + 1;
                        if (
                          pageNumber === 1 ||
                          pageNumber === totalPages ||
                          (pageNumber >= currentPage - 1 &&
                            pageNumber <= currentPage + 1)
                        ) {
                          return (
                            <button
                              key={pageNumber}
                              onClick={() => handlePageChange(pageNumber)}
                              className={
                                currentPage === pageNumber ? "active" : ""
                              }
                            >
                              {pageNumber}
                            </button>
                          );
                        } else if (
                          pageNumber === currentPage - 2 ||
                          pageNumber === currentPage + 2
                        ) {
                          return <span key={pageNumber}>...</span>;
                        }
                        return null;
                      })}
                      <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
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
