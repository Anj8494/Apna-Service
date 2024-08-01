import { ArrowBack, LocalGasStation } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import '../../PageStyle/need/vehicle.css'

const Vehicle=()=>
    {
        const vehicleItem= [
            {name: 'TEST' , price: 2},
            {name: 'OIL' ,price: 1}
        ]
        const navigate=useNavigate();
        // const handleClick=(path)=>{
        //     navigate(path)
        // }
    return<div>
        <div className="vehicle-container">
            <div className="vehicle-hearder">
                <img src='https://w7.pngwing.com/pngs/555/703/png-transparent-computer-icons-avatar-woman-user-avatar-face-heroes-service-thumbnail.png' className='logo'/>
                <h1>Vehicle</h1>
            </div>
            {vehicleItem?.map((item, index)=>(
                <div className='vehicle-item' key={index}>
                    <div className='vehicle-text' onClick={()=>navigate('/test')}>
                        <LocalGasStation className='icon'/>
                        <p>{item.name}</p>
                    </div>
                    <div className='vehicle-price'>${item.price}</div>
                </div>
            ))}
            <div className='back-button'>
            <ArrowBack onClick={()=>navigate('/need')}/>
            </div>

        </div>

    </div>
}
export default Vehicle;