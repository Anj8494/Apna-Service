import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../PageStyle/need/test.css'
import { ArrowBack } from "@mui/icons-material";
const Test =()=>
    {
        const [quantity, setQuantity] = useState('');
        const [fillerUp, setFillerUp] = useState(false);
        const [date,setDate] = useState('');
        const [timSlot, setTimeSlot] = useState('');
        const [comment, setComment] = useState('');

        const handleSubmit =(event)=>{
            event.preventDefault();
            console.log({quantity, fillerUp, date, timSlot, comment});
        };

        const navigate= useNavigate();
      
    return(
        <div className="form-container">
        <ArrowBack className='arrow' onClick={()=>navigate('/equipment')}/>
         <img src='https://w7.pngwing.com/pngs/555/703/png-transparent-computer-icons-avatar-woman-user-avatar-face-heroes-service-thumbnail.png' 
         className='logo' onClick={()=>navigate('/profile')} />
            <h1 className="headw">Test</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                    type="text"
                    value={quantity}
                    placeholder="Enter How Many quantity/gallon "
                    onChange={(event)=> setQuantity(event.target.value)}/>
                </div>
                <div className="form-group input-filler">
                    <label className="label">
                        <input type="checkbox"
                        checked={fillerUp}
                        onChange={(event)=>setFillerUp(event.target.value)}
                        />
                        FillerUp
                    </label>
                </div>
                <div className="form-group">
                    <input
                    type="date"
                    value={date}
                    onChange={(event)=>setDate(event.target.value)}/>
                </div>
                <div className="form-group">
                    <select value={timSlot} onChange={(event)=>setTimeSlot(event.target.value)}>
                        <option value="">Select Time Slot</option>
                        <option value="morning">Morning</option>
                        <option value="afternoon">Afternon</option>
                        <option value="evening">Evening</option>
                    </select>
                </div>
                <div className="form-group">
                    <textarea value={comment}
                    placeholder="Comment"
                    onChange={(event)=>setComment(event.target.value)}/>
                </div>
                <button type="submit">Next</button>
            </form>

        </div>
    )
}
export default Test;