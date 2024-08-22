import Sidebar from "../layout/SideBar";
import Hearder from "../layout/Hearder";
import Footer from "../layout/Footer";
import '../../stylecomponent/notification.css'
import { CachedOutlined, Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Notification = () => 
  {
    const navigate =useNavigate()
  return (
    <div>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />
          <div className="layout-page">
            <Hearder />
            <div className="content">
              <hearder className="hearder">
                <h1>Notification</h1>
                <p className='p'> | Dashboard ---Notification List</p>
                <button className="addcity" onClick={()=>navigate('/addnotifi')}>+ Add New City</button>
              </hearder>
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
                  <h5 class="card-header">Notification List</h5>
                </div>

                <div class="table-responsive text-nowrap">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>SEND TO</th>
                        <th>TITLE</th>
                        <th>DESCRIPTION</th>
                        <th>STATUS</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                     <p className="ptage">no result found</p>
                    </tbody>
                  </table> 
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Notification;
