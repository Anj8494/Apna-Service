import '../../stylecomponent/fuelworkcity.css'
import SideBar from "../layout/SideBar";
import Hearder from "../layout/Hearder";
import Footer from '../layout/Footer'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CachedOutlined, Search } from '@mui/icons-material';
const FuelWorkCity = () => {
  const cities = [
    {
      id: 1,
      city: "Vadodara",
      address: "Vadodara, Gujarat,India",
      status: "Approved",
    },
    {
      id: 2,
      city: "Ujjain",
      address: "Ujjain, Madhya Pradesh,India",
      status: "Approved",
    },
    {
      id: 3,
      city: "Indore",
      address: "Indore, Madhya Pradesh, India",
      status: "Approved",
    },
    {
      id: 4,
      city: "Middletown",
      address: "Middletown, India",
      status: "Approved",
    },
    {
      id: 5,
      city: "East Lyme",
      address: "Ujjain, Madhya Pradesh,India",
      status: "Approved",
    },
    {
      id: 6,
      city: "Ratlam",
      address: "Ratlam, Madhya Pradesh,India",
      status: "Approved",
    },
    {
      id: 7,
      city: "Dewas",
      address: "Dewas, Madhya Pradesh,India",
      status: "Approved",
    },
  ];

  const navigate = useNavigate();


  const [currentPage, setCurrentPage] = useState("");
  const entriesPerPage = 9;
  const totalPages = Math.ceil(cities.length / entriesPerPage);

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
  const endIndex = Math.min(startIndex + entriesPerPage, cities.length);

  return (
    <div>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <SideBar />
          <div className="layout-page">
            <Hearder />
            <div className="content">
              <hearder className="hearder">
                <h1>Fuel Work City </h1>
                <p className='p'> | Dashboard ---Fuel List</p>
                <button className="addcity" onClick={()=>navigate('/fuelform')}>+ Add New City</button>
              </hearder>
            </div>
            <div className="search-bar">
              <input type="text" placeholder="Search" />
              <button className="searchbtn">
                <Search />
              </button>
              <button className="reloadbtn">
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
                        <th>CITY</th>
                        <th>FULL ADDRESS</th>
                        <th>STATUS</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                      {cities?.map((city, id) => (
                        <tr>
                          <td>{city.id}</td>
                          <td>{city.city}</td>
                          <td>{city.address}</td>
                          <td>
                            <span className="badge rounded-pill bg-label-primary me-1">
                              {city.status}
                            </span>
                          </td>
                          <td>
                          <div class="dropdown">
                            <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="mdi mdi-dots-vertical"></i>
                            </button>
                            <div className="dropdown-menu">
                              <Link className="dropdown-item" href="javascript:void(0);"
                                ><i className="mdi mdi-pencil-outline me-1"></i> Edit</Link
                              >
                              <Link className="dropdown-item" href="javascript:void(0);"
                                ><i className="mdi mdi-trash-can-outline me-1"></i> Delete</Link
                              >
                            </div>
                          </div>
                        </td>
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
            <Footer/>
          </div>
        </div>
      </div>


</div>





    // <div class="layout-wrapper layout-content-navbar">
    //   <div class="layout-container">
    //     <div class="layout-page">
    //       <div className="main">
    //         {/* <SideBar /> */}
    //         <div className="fuel">
    //           <div className="profile">
    //             <span>Admin</span>
    //             <div className="profile-pic">
    //             <img src="https://w7.pngwing.com/pngs/555/703/png-transparent-computer-icons-avatar-woman-user-avatar-face-heroes-service-thumbnail.png"
    //              alt="profile" className="pic" onClick={()=>navigate('/adminprofile')}/>
    //             </div>
    //           </div>
    //           <div className="content">
    //             <hearder className="hearder">
    //               <h1>Fuel Work City</h1>
    //               <button className="addcity">+ Add New City</button>
    //             </hearder>
    //           </div>
    //           <div className="search-bar">
    //             <input type="text" placeholder="search by name" />
    //             <button className="search-button">
    //               <Search />
    //             </button>
    //             <button className="refresh-button">
    //               <CachedOutlined />
    //             </button>
    //           </div>

    //           <div class="card">
    //             <div className="tb-heading">
    //               <h5 className="card-header">Fuel List</h5>
    //               <p>Showing 1-6 of 11</p>
    //             </div>
    //             <div className="table-responsive text-nowrap">
    //               <table className="table">
    //                 <thead className="table-light">
    //                   <tr>
    //                     <th>S.No</th>
    //                     <th>CITY</th>
    //                     <th>FULL ADDRESS</th>
    //                     <th>STATUS</th>
    //                     <th>ACTION</th>
    //                   </tr>
    //                 </thead>
    //                 <tbody className="table-border-bottom-0">
    //                   {cities?.map((city, id) => (
    //                     <tr>
    //                       <td className="fw-medium">{city.id}</td>
    //                       <td>{city.city}</td>
    //                       <td>{city.address}</td>
    //                       <td>
    //                         <span className="badge rounded-pill bg-label-primary me-1">
    //                           {city.status}
    //                         </span>
    //                       </td>
    //                       <td>
    //                         <div className="dropdown">
    //                           <i className="mdi mdi-dots-vertical"></i>
    //                         </div>
    //                       </td>
    //                     </tr>
    //                   ))};
    //                 </tbody>
    //               </table>
    //             </div>
    //           </div>

    //           <div className="row">
    //             <div className="col-xxl">
    //               <div className="card mb-4">
    //                 <div className="card-body">
    //                     <div className="row mb-3">
    //                       <label className="col-sm-2 col-form-label" for="basic-default-name">Boat_oil</label>
    //                       <div className="col-sm-10">
    //                         <input type="text" className="form-control" id="basic-default-name" placeholder="Enter SUb Category Price" />
    //                       </div>
    //                     </div>
    //                     <div className="row mb-3">
    //                       <label className="col-sm-2 col-form-label" for="basic-default-company">Abhi</label>
    //                       <div className="col-sm-10">
    //                       <div className="form-text">Sub Category Price</div>
    //                         <input
    //                           type="text"
    //                           className="form-control"
    //                           id="basic-default-company"
    //                           placeholder="Enter SUb Category Price" />
    //                       </div>
    //                       <label className="col-sm-2 col-form-label" for="basic-default-company">Personal*</label>

    //                     </div>
    //                     <div className="row mb-3">
    //                       <label className="col-sm-2 col-form-label" for="basic-default-email">Nj</label>
    //                       <div className="col-sm-10">
    //                         <div className="input-group input-group-merge">
    //                           <input
    //                             type="text"
    //                             id="basic-default-email"
    //                             className="form-control"
    //                             placeholder="enter Sub Category Price"
    //                             aria-label="john.doe"
    //                             aria-describedby="basic-default-email2" />
    //                           <span class="input-group-text" id="basic-default-email2"></span>
    //                         </div>
    //                         <div className="form-text">Sub Category Price</div>
    //                         </div>
    //                         <label className="col-sm-2 col-form-label" for="basic-default-company">Vehicle*</label>
    //                     </div>
    //                     <div className="row mb-3">
    //                       <label className="col-sm-2 col-form-label" for="basic-default-phone">Radha</label>
    //                       <div className="col-sm-10">
    //                       <div className="form-text">Sub Category Price</div>
    //                         <input
    //                           type="text"
    //                           id="basic-default-phone"
    //                           className="form-control phone-mask"
    //                           placeholder="Sub Category priced"
    //                           aria-describedby="basic-default-phone" />
    //                       </div>
    //                       <label className="col-sm-2 col-form-label" for="basic-default-phone">bhjghj</label>
    //                     </div>
    //                     <div className="row mb-3">
    //                       <label className="col-sm-2 col-form-label" for="basic-default-message">Shan</label>
    //                       <div className="col-sm-10">
    //                       <div className="form-text">Sub Category Price</div>
    //                       <input
    //                           type="text"
    //                           id="basic-default-phone"
    //                           class="form-control phone-mask"
    //                           placeholder="Sub Category Price"
    //                           aria-label="658 799 8941"
    //                           aria-describedby="basic-default-phone" />
    //                       </div>
    //                       </div>
    //                       <label class="col-sm-2 col-form-label" for="basic-default-message">Shan</label>

    //                     </div>
    //                     <div class="row justify-content-end">
    //                       <div class="col-sm-10">
    //                         <button type="submit" class="btn btn-primary">Send</button>
    //                         <button type="submit" class="backbt">Back</button>

    //                       </div>
    //                     </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>

    //         </div>
    //       </div>
    //     </div>
    //   </div>
  );
};
export default FuelWorkCity;
