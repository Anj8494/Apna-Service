import { useNavigate } from 'react-router-dom';
import service from '../PageStyle/service.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Avatar } from '@mui/material';
import avtar from '../assest/avtar.png'
import Need from './Need/Need';

const ServiceArea=()=>
{
    const navigate= useNavigate();
    const serviceAreas= [
        { name :'Vododara' , location: 'Vododara, Gujarat, India'},
        { name :'Ujjain', location: 'Ujjain , Madhya Pradesh , India'},
        { name : 'Indore' , location :'Indore, Madhya Pradesh, India'},
        { name :'Middletown', location: 'Middletown'},
        {name : 'East Lyme' , location: 'East Lyme'},
        {name:'Old Lyme', location: 'Old Lyme'},
        {name: 'Norwich' ,location:'Norwich'} 
    ]

    const handleNavigation=(path) =>{
        navigate(path)
    }
    return(
        <div className="container">
            <div className='profile'>
                  <img src="https://w7.pngwing.com/pngs/555/703/png-transparent-computer-icons-avatar-woman-user-avatar-face-heroes-service-thumbnail.png" 
                  alt="user"
                  onClick={()=>handleNavigation('/profile')}
                   className="avatar"/>
             </div>
            <h1>Service Area</h1>
            <ul className='area-list'>
                {serviceAreas.map((area,index)=>(
                    <li key={index}>
                        <div className="area-item">
                            <div className='icon-placeholder'>
                                <LocationOnIcon/>
                            </div>
                            <div>
                                <h2 className='area-name' onClick={()=>handleNavigation('/need')}>{area.name}</h2>
                                <p className='area-location'>{area.location}</p>
                             </div>
                         </div> 

                    </li>
                ))}
            </ul>

        </div>
    )
}
export default ServiceArea;