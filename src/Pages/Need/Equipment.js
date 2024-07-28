import { ArrowBack, LocalGasStationSharp } from '@mui/icons-material';
import HandymanIcon from '@mui/icons-material/Handyman';
import equipment from "../../PageStyle/need/equipment.css"
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';

const Equipment=()=>{
    const equipmentItem= [
        {name: 'TEST' , price: 2},
        {name: 'OIL' ,price: 1}
    ]
    const navigate=useNavigate();
    const handleClick=(path)=>{
        navigate(path)
    }
    return(
        <div className="equipment-container">
            <div className="equipment-hearder">
                <img src='https://w7.pngwing.com/pngs/555/703/png-transparent-computer-icons-avatar-woman-user-avatar-face-heroes-service-thumbnail.png' className='logo'/>
                <h1>Equipment</h1>
            </div>
            {equipmentItem.map((item, index)=>(
                <div className='equipment-item' key={index}>
                    <div className='equipment-text' onClick={()=>handleClick('/test')}>
                        <LocalGasStationSharp className='icon'/>
                        <p>{item.name}</p>
                    </div>
                    <div className='equipment-price'>${item.price}</div>
                </div>
            ))}
            <div className='back-button'>
            <ArrowBack onClick={()=>handleClick('/need')}/>
            </div>

        </div>
    )
}
export default Equipment;