import { ArrowBack, Build, Directions, DirectionsBoat, DirectionsCar, Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import need from '../../PageStyle/need/need.css'
const Need=()=>
{
    const navigate =useNavigate();

    const handleNavigation=(path)=>{
        navigate(path);
    }
    return(
        <div className="dashboard-container">
            <div className="div">
            <ArrowBack onClick={()=>handleNavigation('/profile')} className="arrow-back"/>
            <img src="https://w7.pngwing.com/pngs/555/703/png-transparent-computer-icons-avatar-woman-user-avatar-face-heroes-service-thumbnail.png" alt="user" className="profile"/>
            </div>
            <h1>Welcome</h1>
            <p className="ptag">Need a helping hand today?</p>
            <div className="options-grid">
                <div className="option-card" onClick={()=>handleNavigation('/equipment')}>
                    <Build style={{fontSize :50}}/>
                    <p>Equipment</p>
                </div>
                <div className="option-card" onClick={()=>handleNavigation('/boat')}>
                    <DirectionsBoat style={{fontSize:50}}/>
                    <p>Boat</p>
                </div>
                <div className="option-card" onClick={()=>handleNavigation('/personal')}>
                    <Person style={{fontSize:50}}/>
                    <p>Personal</p>
                </div>
                <div className="option-card" onClick={()=>handleNavigation('/vehicle')}>
                    <DirectionsCar style={{fontSize:50}}/>
                    <p>Vehicle</p>

                </div>
            </div>

        </div>
    )
}
export default Need;