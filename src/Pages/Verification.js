import { useEffect, useRef, useState } from "react";
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import verification from '../PageStyle/verification.css'
import { useNavigate } from "react-router-dom";
const Verification=()=>{
    const [code,setCode] =useState(["","","",""]);
    const [timeLeft, settimeLeft] = useState(175);
    const navigate= useNavigate();
    const inputs =useRef([]);


    useEffect(()=>{
        const timer = setInterval(()=>{
             settimeLeft((prevTime)=> (prevTime >0 ? prevTime -1 :0));
        },1000);

        return ()=> clearInterval(timer)
    },[]);

    // const handleChange = (value, index) =>{
    //     const newCode =[...code];
    //     newCode[index] = value;
    //     setCode(newCode);
    //     if (value && index <inputs.current.lenth -1){
    //         inputs.current[index+1].focus()
    //     }
    // };

    const handleChange = (value, index) => {
        if (/^\d$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);
            if (index < inputs.current.length - 1) {
                inputs.current[index + 1].focus();
            }
        } else if (value === "") {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);
        }
    };
    const handlePaste = (event) => {
        event.preventDefault();
        const paste = event.clipboardData.getData('text');
        if (/^\d{4}$/.test(paste)) {
            const newCode = paste.split('');
            setCode(newCode);
            inputs.current[3].focus();
        }
    };
    const handleKeyDown =(event , index)=>{
        if(event.key === 'Backspace' && !code[index] && index >0){
            inputs.current[index -1].focus();
        }
    }

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

      useEffect(() => {
        inputs.current[0].focus();
    }, []);

    return(
        <div className="app">
            <h1>Verification Code,</h1>
            <div className="icon-container">
                <MobileFriendlyIcon/>
            </div>
            <p>Enter 4 Digit code</p>
            <form onSubmit={handleSubmit}>
                <div className="code-inputs" onPaste={handlePaste}>
                    {code.map((digit, index)=>(
                        <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) =>handleChange(e.target.value.replace(/\D/g, ''),index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        ref={(el) => (inputs.current[index]= el)}
                        minLength="1"
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