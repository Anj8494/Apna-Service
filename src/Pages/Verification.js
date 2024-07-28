import { useEffect, useState } from "react";
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import verification from '../PageStyle/verification.css'
import { useNavigate } from "react-router-dom";
const Verification=()=>{
    const [code,setCode] =useState(["","","",""]);
    const [timeLeft, settimeLeft] = useState(175);
    const navigate= useNavigate();


    useEffect(()=>{
        const timer = setInterval(()=>{
             settimeLeft((prevTime)=> (prevTime >0 ? prevTime -1 :0));
        },1000);

        return ()=> clearInterval(timer)
    },[]);

    const handleChange = (event, index) =>{
        const newCode =[...code];
        newCode[index] = event.target.value;
        setCode(newCode);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log('Verification Code:' , code.join(''));
        navigate('/servicearea')
    }
    const formatTime =(time) => {
        const minutes = Math.floor(time/60);
        const seconds= time %60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;  
      };

     

    return(
        <div className="app">
            <h1>Verification Code,</h1>
            <div className="icon-container">
                <MobileFriendlyIcon/>
            </div>
            <p>Enter 4 Digit code</p>
            <form onSubmit={handleSubmit}>
                <div className="code-inputs">
                    {code.map((digit, index)=>(
                        <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) =>handleChange(e,index)}
                        required
                        />
                    ))}
                </div>
                <button type="submit" >Submit</button>
            </form>
            <div className="timer">{formatTime(timeLeft)}</div>
        </div>
    )
}
export default Verification;