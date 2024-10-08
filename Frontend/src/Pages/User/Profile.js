import ListAltIcon from '@mui/icons-material/ListAlt';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ArticleIcon from '@mui/icons-material/Article';
import LogoutIcon from '@mui/icons-material/Logout';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBack, ArrowBackIos, ArrowOutward, BorderColorOutlined, Edit } from '@mui/icons-material';
import '../../PageStyle/User/profile.css'
const Profile=()=>
{

    const navigate= useNavigate();

    const [user, setUser] = useState({
        fullName: 'Nj',
        mobileNo: '673656',
        email:''
    });

    // const handleNavigation=(path) =>{
    //     navigate(path)
    // }


    return(
        <div className="profile-container">
            <div className='iconb'>
            <ArrowBack onClick={()=>navigate('/servicearea')} className='arrowb'/>
            <BorderColorOutlined onClick={()=>navigate('/edit')} className='edit-profilei'/>
            </div>
            <header className='profile-header'>
            <h1> {user.fullName}</h1>
            <img src="https://w7.pngwing.com/pngs/555/703/png-transparent-computer-icons-avatar-woman-user-avatar-face-heroes-service-thumbnail.png" alt="user" 
            className="profileimg"/>
            </header>
           <div className="profile-menu">
                <div className="profile-menu-item" onClick={()=>navigate('/orderhistory')}>
                <ListAltIcon className='i'/> Order History
                </div>
                <div className='profile-menu-item' onClick={()=>navigate('/faqs')}>
                    <QuestionMarkIcon className='i'/> FAQs
                </div>
                <div className='profile-menu-item' onClick={()=>navigate('/notification')}>
                    <NotificationsActiveIcon className='i'/> Notification
                </div>
                <div className='profile-menu-item' onClick={()=>navigate('/termsofservice')}>
                   <InsertDriveFileIcon className='i'/> Terms Of Service
                </div>
                <div className='profile-menu-item'onClick={()=>navigate('/aboutus')}>
                   <ArticleIcon className='i'/> About Us
                </div>
                <div className='profile-menu-item' onClick={()=>navigate('/howitworks')}>
                    <QuestionMarkIcon className='i'/> How It Works
                </div>
                <div className='profile-menu-item' onClick={()=>navigate('/logout')}>
                     <LogoutIcon className='i'/>   LogOut
                </div>
           </div>

        </div>
    )
}
export default Profile;