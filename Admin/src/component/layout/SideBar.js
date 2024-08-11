import {
  AccessTime,
BookOnline,Dns,DriveFileRenameOutlineOutlined,Edit,Home,LinkRounded,NotificationsActive,Person,Room,Settings,
} from "@mui/icons-material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();

  const toggleSubMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  return (
    <div>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
        
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
          <div className="app-brand demo">
            <Link  className="app-brand-link">
              <span className="app-brand-logo demo me-1">
                <span style={{color: "var(--bs-primary)"}}>
                  <svg width="30" height="24" viewBox="0 0 250 196" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.3002 1.25469L56.655 28.6432C59.0349 30.1128 60.4839 32.711 60.4839 35.5089V160.63C60.4839 163.468 58.9941 166.097 56.5603 167.553L12.2055 194.107C8.3836 196.395 3.43136 195.15 1.14435 191.327C0.395485 190.075 0 188.643 0 187.184V8.12039C0 3.66447 3.61061 0.0522461 8.06452 0.0522461C9.56056 0.0522461 11.0271 0.468577 12.3002 1.25469Z"
                      fill="currentColor" />
                    <path
                      opacity="0.077704"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 65.2656L60.4839 99.9629V133.979L0 65.2656Z"
                      fill="black" />
                    <path
                      opacity="0.077704"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 65.2656L60.4839 99.0795V119.859L0 65.2656Z"
                      fill="black" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M237.71 1.22393L193.355 28.5207C190.97 29.9889 189.516 32.5905 189.516 35.3927V160.631C189.516 163.469 191.006 166.098 193.44 167.555L237.794 194.108C241.616 196.396 246.569 195.151 248.856 191.328C249.605 190.076 250 188.644 250 187.185V8.09597C250 3.64006 246.389 0.027832 241.935 0.027832C240.444 0.027832 238.981 0.441882 237.71 1.22393Z"
                      fill="currentColor" />
                    <path
                      opacity="0.077704"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M250 65.2656L189.516 99.8897V135.006L250 65.2656Z"
                      fill="black" />
                    <path
                      opacity="0.077704"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M250 65.2656L189.516 99.0497V120.886L250 65.2656Z"
                      fill="black" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.2787 1.18923L125 70.3075V136.87L0 65.2465V8.06814C0 3.61223 3.61061 0 8.06452 0C9.552 0 11.0105 0.411583 12.2787 1.18923Z"
                      fill="currentColor" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.2787 1.18923L125 70.3075V136.87L0 65.2465V8.06814C0 3.61223 3.61061 0 8.06452 0C9.552 0 11.0105 0.411583 12.2787 1.18923Z"
                      fill="white"
                      fill-opacity="0.15" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M237.721 1.18923L125 70.3075V136.87L250 65.2465V8.06814C250 3.61223 246.389 0 241.935 0C240.448 0 238.99 0.411583 237.721 1.18923Z"
                      fill="currentColor" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M237.721 1.18923L125 70.3075V136.87L250 65.2465V8.06814C250 3.61223 246.389 0 241.935 0C240.448 0 238.99 0.411583 237.721 1.18923Z"
                      fill="white"
                      fill-opacity="0.3" />
                  </svg>
                </span>
              </span>
              <span className="app-brand-text demo menu-text fw-semibold ms-2">Apna Service</span>
            </Link>

            <Link to="" className="layout-menu-toggle menu-link text-large ms-auto">
              <i className="mdi menu-toggle-icon d-xl-block align-middle mdi-20px"></i>
            </Link>
          </div>

          <div className="menu-inner-shadow"></div>

          <ul className="menu-inner py-1">
            
            <li className="menu-item active open">
              <Link to='/dashboard' className="menu-link ">
                <i className="menu-icon tf-icons mdi mdi-home-outline"></i>
                <div data-i18n="Dashboards">Dashboards</div>
              </Link> 
            </li>          
            <li className="menu-item">
              <Link to="" className="menu-link menu-toggle">
                <BookOnline className="menu-icon tf-icons mdi mdi-archive-outline"/>
                <div data-i18n="User interface">Booking</div>
                <div class="badge bg-danger rounded-pill ms-auto">4</div>
              </Link>
            </li>

          
            <li className="menu-item">
              <Link to="/fuelworkcity" className="menu-link">
                <Room className="menu-icon tf-icons mdi mdi-star-outline"/>
                <div data-i18n="Extended UI">Fuel Work City</div>
              </Link>
            </li>

           
            <li className="menu-item">
              <Link to="" className="menu-link">
                <Dns className="menu-icon tf-icons mdi mdi-google-circles-extended"/>
                <div data-i18n="Icons">Manage Category</div>
              </Link>
            </li>
          
            <li className="menu-item">
              <Link to="" className="menu-link menu-toggle" onClick={()=> toggleSubMenu('userManagement')}>
                <BookOnline className="menu-icon tf-icons mdi mdi-form-select"/>
                <div data-i18n="Form Elements">User Manage</div>
                <div class="badge bg-danger rounded-pill ms-auto">2</div>
              </Link>
              {activeMenu === 'userManagement' && (
                <div classNameName="submenu-item">
                    <div style={{margin: "0px 30px"}} onClick={()=>navigate('/user')}>User</div>
                    <div style={{margin: "0px 30px"}} onClick={()=>navigate('/drivers')}>Drivers</div>
                </div>
               )}
            </li>

            <li className="menu-item">
              <Link to="" 
               className="menu-link">
                <Dns className="menu-icon tf-icons mdi mdi-google-circles-extended"/>
                <div data-i18n="Icons">Manage Category</div>
              </Link>
            </li>


            <li className="menu-item">
              <Link to="" className="menu-link">
                <AccessTime className="menu-icon tf-icons mdi mdi-google-circles-extended"/>
                <div data-i18n="Icons">Delivery Time Slot</div>
              </Link>
            </li>


            <li className="menu-item">
              <Link to="" className="menu-link">
                <NotificationsActive className="menu-icon tf-icons mdi mdi-google-circles-extended"/>
                <div data-i18n="Icons">Notification</div>
              </Link>
            </li>

            <li className="menu-item">
              <Link to="" className="menu-link" onClick={()=> toggleSubMenu('editors')}>
                <Dns className="menu-icon tf-icons mdi mdi-google-circles-extended"/>
                <div data-i18n="Icons">Editor</div>
                <div class="badge bg-danger rounded-pill ms-auto">2</div>
              </Link>
              {activeMenu === 'editors' && (
                    <div classNameName="submenu">
                        <div style={{margin: "0px 30px"}}>Editor 1</div>
                        <div style={{margin: "0px 30px"}}>Editor 2</div>
                    </div>
                )}
            </li>

            <li className="menu-item">
              <Link to="" className="menu-link">
                <Person className="menu-icon tf-icons mdi mdi-google-circles-extended"/>
                <div data-i18n="Icons">Admin Profile</div>
              </Link>
            </li>

            <li className="menu-item">
              <Link className="menu-link">
                <Settings className="menu-icon tf-icons mdi mdi-google-circles-extended"/>
                <div data-i18n="Icons">Setting</div>
              </Link>
            </li>
           
          </ul>
        </aside>
         
        </div>
      </div>

      {/* <div classNameName="main layout-menu menu-vertical menu bg-menu-theme">
        <div classNameName="sidebar " >
            <div classNameName="logo">ApnaService</div>
            <div classNameName="menu menu-inner py-1">
                <div classNameName="menu-item" onClick={()=> navigate('/dashboard')}>
                    <Home classNameName="dashboard-i"/>
                    <span>Dashboard</span>
                </div>
                <div classNameName="menu-item" onClick={()=> navigate('/booking')}>
                    <BookOnline classNameName="bokking-i"/>
                    <span>Booking</span>
                    <span classNameName="notification-badge">4</span>
                </div>
                <div classNameName="menu-item" onClick={()=> navigate('/fuelworkcity')}>
                    <Room classNameName="fuel-i"/>
                    <span> Fuel Work City</span>
                </div>
                <div classNameName="menu-item" onClick={()=> navigate('/managectegory')}>
                    <Dns classNameName="managecat-i"/>
                    <span>Manage Category</span>
                </div>
                <div classNameName="menu-item"
                onClick={()=> toggleSubMenu('userManagement')}>
                    <BookOnline classNameName="user -i"/>
                    <span>User Management</span>
                    <span classNameName="notification-badge">2</span>
                </div>
                {activeMenu === 'userManagement' && (
                <div classNameName="submenu-item">
                    <div classNameName="submenu-item" onClick={()=>navigate('/user')}>User</div>
                    <div classNameName="submenu-item" onClick={()=>navigate('/drivers')}>Drivers</div>
                </div>
               )}
                <div classNameName="menu-item" onClick={()=>navigate('/deliverytimeslot')}>
                    <AccessTime classNameName="delivery-i"/>
                    <span>Delivery Time Slot</span>
                </div>
                <div classNameName="menu-item" onClick={()=>navigate('/notification')}>
                    <NotificationsActive classNameName="notifi-i"/>
                    <span>Notification</span>
                </div>
                <div classNameName="menu-item" onClick={()=> toggleSubMenu('editors')}>
                    <DriveFileRenameOutlineOutlined classNameName="editor-i"/>
                    <span>Editors</span>
                    <span classNameName="notification-badge">2</span>
                </div>
                {activeMenu === 'editors' && (
                    <div classNameName="submenu">
                        <div classNameName="submenu-item">Editor 1</div>
                        <div classNameName="submenu-item">Editor 2</div>
                    </div>
                )}

                <div classNameName="menu-item" onClick={()=>navigate('/adminprofile')}>
                    <Person classNameName="profile-i"/>
                    <span>Admin Profile</span>
                </div>
                <div classNameName="menu-item" onClick={()=>navigate('/setting')}>
                    <Settings classNameName="setting-i"/>
                    <span>Settings</span>
                </div>

            </div>
        </div>
      </div> */}
    </div>
  );
};
export default SideBar;
