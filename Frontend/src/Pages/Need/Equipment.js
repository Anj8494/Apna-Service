import { ArrowBack, LocalGasStationSharp } from '@mui/icons-material';
import HandymanIcon from '@mui/icons-material/Handyman';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import '../../PageStyle/need/equipment.css'
const Equipment=()=>{
    const equipmentItem= [
        {name: 'TEST' , price: 2},
        {name: 'OIL' ,price: 1}
    ]
    const navigate=useNavigate();
  
    return(
        <div className="equipment-container">
            <div className="equipment-hearder">
                <img src='https://w7.pngwing.com/pngs/555/703/png-transparent-computer-icons-avatar-woman-user-avatar-face-heroes-service-thumbnail.png'
                onClick={()=>navigate('/profile')}
                className='logos'/>
            </div>
            <h1 className='haedt'>Equipment</h1>
            {equipmentItem?.map((item, index)=>(
                <div className='equipment-item' key={index}>
                    <div className='equipment-text' onClick={()=>navigate('/test')}>
                        <LocalGasStationSharp className='icon'/>
                        <p>{item.name}</p>
                    </div>
                    <div className='equipment-price'>${item.price}</div>
                </div>
            ))}
            <div className='back-button'>
            <ArrowBack onClick={()=>navigate('/need')}/>
            </div>

        </div>
    )
}
export default Equipment;