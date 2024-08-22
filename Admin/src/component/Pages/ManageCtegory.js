import { Link, useNavigate } from "react-router-dom";
import "../../stylecomponent/category.css";
import Hearder from "../layout/Hearder";
import SideBar from "../layout/SideBar";
import { CachedOutlined, Image, Search } from "@mui/icons-material";
import Footer from "../layout/Footer";
import { useState } from "react";

const ManageCategory = () => 
{
    const category= [
        {id:1,image:"no image found",categoryName:"baik",categoryType: "sfbfjh", status:"Approved"},
        {id:2,image:"no image found", categoryName:"ship",categoryType:"jfbgjh",status:"Approved"},
        {id:3,image:"no image found", categoryName:"vehicle", categoryType:"hgsdh", status:"Approved"},
        {id:4,image:"no image found", categoryName: "baik", categoryType:"hfuy", status:"jhg"},
        {id:5, image:"no image found",categoryName:"hjfg",categoryType:"hgf", status:"Approved"},
    ]




  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState();
  const entriesPerPage = 9;
  const totalPages = Math.ceil(category.length / entriesPerPage);

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
  const endIndex = Math.min(startIndex + entriesPerPage, category.length);
  return (
    <div>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <SideBar />
          <div className="layout-page">
            <Hearder />
            <div className="content">
              <hearder className="hearder">
                <h1>Category</h1>
                <p className="p"> | Dashboard --- Category</p>
                <button
                  className="addcity"
                  onClick={() => navigate("/addcategory")}
                >
                  + Add Category
                </button>
              </hearder>
            </div>
            <div className="search-bar">
              <input type="text" placeholder="Search" />
              <input
                type="text"
                placeholder="Search by Category"
                className="sear"
              />
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
                        <th>Image</th>
                        <th>CATEGORY NAME</th>
                        <th>CATEGORY TYPE</th>
                        <th>STATUS</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                      {category?.map((category, id) => (
                        <tr>
                          <td>{category.id}</td>
                          <td>{category.image}</td>
                          <td>{category.categoryName}</td>
                          <td>{category.categoryType}</td>
                          <td>
                            <span className="badge rounded-pill bg-label-primary me-1">
                              {category.status}
                            </span>
                          </td>
                          <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="mdi mdi-dots-vertical"></i>
                            </button>
                            <div className="dropdown-menu">
                              <Link className="dropdown-item" to=""
                                ><i className="mdi mdi-pencil-outline me-2"></i> Edit</Link
                              >
                              <Link className="dropdown-item" to=""
                                ><i className="mdi mdi-trash-can-outline me-2"></i> Delete</Link
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
  );
};
export default ManageCategory;
