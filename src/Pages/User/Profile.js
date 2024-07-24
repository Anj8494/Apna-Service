import ListAltIcon from '@mui/icons-material/ListAlt';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ArticleIcon from '@mui/icons-material/Article';
import LogoutIcon from '@mui/icons-material/Logout';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Edit } from '@mui/icons-material';
import '../../PageStyle/User/profile.css'
const Profile=()=>
{

    const navigate= useNavigate();

    const [user, setUser] = useState({
        fullName: 'Nj',
        mobileNo: '673656',
        email:''
    });

    const handleNavigation=(path) =>{
        navigate(path)
    }


    return(
        <div className="profile-container">
            <header className='profile-header'>
            <img src="https://w7.pngwing.com/pngs/555/703/png-transparent-computer-icons-avatar-woman-user-avatar-face-heroes-service-thumbnail.png" alt="user" className="profile-avatar"/>
            <Edit onClick={()=>handleNavigation('/edit')} className='edit-profile'/>
            <h1> {user.fullName}</h1>
            </header>
           <div className="profile-menu">
                <div className="profile-menu-item" onClick={()=>handleNavigation('/orderhistory')}>
                <ListAltIcon className='i'/> Order History
                </div>
                <div className='profile-menu-item' onClick={()=>handleNavigation('/faqs')}>
                    <QuestionMarkIcon className='i'/> FAQs
                </div>
                <div className='profile-menu-item' onClick={()=>handleNavigation('/notification')}>
                    <NotificationsActiveIcon className='i'/> Notification
                </div>
                <div className='profile-menu-item' onClick={()=>handleNavigation('/termsofservice')}>
                   <InsertDriveFileIcon className='i'/> Terms Of Service
                </div>
                <div className='profile-menu-item'onClick={()=>handleNavigation('/aboutus')}>
                   <ArticleIcon className='i'/> About Us
                </div>
                <div className='profile-menu-item' onClick={()=>handleNavigation('/howitworks')}>
                    <QuestionMarkIcon className='i'/> How It Works
                </div>
                <div className='profile-menu-item' onClick={()=>handleNavigation('/logout')}>
                     <LogoutIcon className='i'/>   LogOut
                </div>
           </div>

        </div>
    )
}
export default Profile;