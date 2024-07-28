import { ArrowBack, LocalGasStation } from '@mui/icons-material';
import personal from '../../PageStyle/need/personal.css'
import { useNavigate } from 'react-router-dom';
const Personal=()=>
    {
        const personalItem= [
            {name: 'TEST' , price: 2},
            {name: 'OIL' ,price: 1}
        ]
        const navigate=useNavigate();
        const handleClick=(path)=>{
            navigate(path)
        }
    return(
        <div className="personal-container">
            <div className="personal-hearder">
                <img src='https://w7.pngwing.com/pngs/555/703/png-transparent-computer-icons-avatar-woman-user-avatar-face-heroes-service-thumbnail.png' className='logo'/>
                <h1>Personal</h1>
            </div>
            {personalItem.map((item, index)=>(
                <div className='personal-item' key={index}>
                    <div className='personal-text' onClick={()=>handleClick('/test')}>
                        <LocalGasStation className='icon'/>
                        <p>{item.name}</p>
                    </div>
                    <div className='personal-price'>${item.price}</div>
                </div>
            ))}
            <div className='back-button'>
            <ArrowBack onClick={()=>handleClick('/need')}/>
            </div>
</div>
    )
}
export default Personal;