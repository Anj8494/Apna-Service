import { AccessTime, BookOnline, Dns, DriveFileRenameOutlineOutlined, Edit, Home, NotificationsActive, Person, Room, Settings } from "@mui/icons-material";
import { useState } from "react";
import Dashboard from "./Dashboard";
import '../stylecomponent/sidebar.css'
import { useNavigate } from "react-router-dom";
const SideBar=()=>{
    const [activeMenu , setActiveMenu] = useState(null);
    const navigate= useNavigate();

    const toggleSubMenu =(menuName)=> {
        setActiveMenu(activeMenu === menuName ? null :menuName);
    };

    return(
     <div className="main layout-menu menu-vertical menu bg-menu-theme">
        <div className="sidebar " >
            <div className="logo">ApnaService</div>
            <div className="menu menu-inner py-1">
                <div className="menu-item" onClick={()=> navigate('/dashboard')}>
                    <Home className="dashboard-i"/>
                    <span>Dashboard</span>
                </div>
                <div className="menu-item" onClick={()=> navigate('/booking')}>
                    <BookOnline className="bokking-i"/>
                    <span>Booking</span>
                    <span className="notification-badge">4</span>
                </div>
                <div className="menu-item" onClick={()=> navigate('/fuelworkcity')}>
                    <Room className="fuel-i"/>
                    <span> Fuel Work City</span>
                </div>
                <div className="menu-item" onClick={()=> navigate('/managectegory')}>
                    <Dns className="managecat-i"/>
                    <span>Manage Category</span>
                </div>
                <div className="menu-item" 
                onClick={()=> toggleSubMenu('userManagement')}>
                    <BookOnline className="user -i"/>
                    <span>User Management</span>
                    <span className="notification-badge">2</span>
                </div>
                {activeMenu === 'userManagement' && (
                <div className="submenu-item">
                    <div className="submenu-item" onClick={()=>navigate('/user')}>User</div>
                    <div className="submenu-item" onClick={()=>navigate('/drivers')}>Drivers</div>
                </div>
               )}
                <div className="menu-item" onClick={()=>navigate('/deliverytimeslot')}>
                    <AccessTime className="delivery-i"/>
                    <span>Delivery Time Slot</span>
                </div>
                <div className="menu-item" onClick={()=>navigate('/notification')}>
                    <NotificationsActive className="notifi-i"/>
                    <span>Notification</span>
                </div>
                <div className="menu-item" onClick={()=> toggleSubMenu('editors')}>
                    <DriveFileRenameOutlineOutlined className="editor-i"/>
                    <span>Editors</span>
                    <span className="notification-badge">2</span>
                </div>
                {activeMenu === 'editors' && (
                    <div className="submenu">
                        <div className="submenu-item">Editor 1</div>
                        <div className="submenu-item">Editor 2</div>
                    </div>
                )}

                <div className="menu-item" onClick={()=>navigate('/adminprofile')}>
                    <Person className="profile-i"/>
                    <span>Admin Profile</span>
                </div>
                <div className="menu-item" onClick={()=>navigate('/setting')}>
                    <Settings className="setting-i"/>
                    <span>Settings</span>
                </div>

            </div>
            
        </div>
      </div>
    )
}
export default SideBar;
