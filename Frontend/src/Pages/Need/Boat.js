import { useNavigate } from "react-router-dom";
import { ArrowBack, LocalGasStationOutlined } from "@mui/icons-material";
import '../../PageStyle/need/boat.css'
const Boat=()=>
    {
        const boatItem= [
            {name: 'TEST' , price: 2},
            {name: 'OIL' ,price: 1}
        ]
        const navigate=useNavigate();
        // const handleClick=(path)=>{
        //     navigate(path)
        // }
    return(
        <div className="boat-container">
            <div className="boat-hearder">
                <img src='https://w7.pngwing.com/pngs/555/703/png-transparent-computer-icons-avatar-woman-user-avatar-face-heroes-service-thumbnail.png' 
                onClick={()=>navigate('/profile')}
                className='logoim'/>
            </div>
            <h1 className="headi">Boat</h1>
            {boatItem?.map((item, index)=>(
                <div className='boat-item' key={index}>
                    <div className='boat-text' onClick={()=>navigate('/test')}>
                        <LocalGasStationOutlined className='icon'/>
                        <p>{item.name}</p>
                    </div>
                    <div className='boat-price'>${item.price}</div>
                </div>
            ))}
            <div className='back-button'>
            <ArrowBack onClick={()=>navigate('/need')}/>
            </div>

        </div>
    )
}
export default Boat;