import { useState } from "react";
import edit from '../../PageStyle/User/edit.css'
import { Navigate, useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
const Edit=()=>{
    const [fullName, setFullName] =useState("");
    const [mobileNo, setMobileNo] =useState("");
    const [email, setEmail] = useState("");
    const [mobileError, setMobileNoError]= useState("")
    const navigate =useNavigate();

    const validateMobileNo=(mobile)=> {
        const moblieRegex =/\D{10}$/;
        return moblieRegex.test(mobile)
    }

    const handlSubmit=(event)=>{
        event.preventDefault();
        console.log('form submitted:', {fullName, mobileNo, email});
        navigate('/profile')
    }
    const handleNavigation=(path) =>{
        navigate(path)
    }

    const handleInputChange=(event)=>{
        const input = event.target.value;
        const numericInput = input.replace(/\D/g,'');
        setMobileNo(numericInput);
        if(!validateMobileNo(numericInput)){
            setMobileNoError("Invalid mobile number ")
        }
        else{
            setMobileNoError('')
        }
    }

    return(
        <div className="edit-account-container">
             <div className="arrow">
            <ArrowBack onClick={()=>handleNavigation('/profile')}/>
            </div>
            <h1>Edit Accoount</h1>
            <form onSubmit={handlSubmit}>
                <div className="form-group">
                    <label htmlFor="fullname">FullName</label>
                    <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(event=>setFullName(event.target.value))}
                    placeholder="Enter Full Name"
                    required/>
                </div>
                <div className="form-group">
                    <label htmlFor="mobileNo">Mobile No.</label>
                    <input 
                    type="text"
                    id="mobileNo"
                    value={mobileNo}
                    onChange={handleInputChange}
                    placeholder="Enter Mobie Number"
                    required/>
                    {mobileError && <p>{mobileError}</p>}
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event)=>setEmail(event.target.value)}
                    placeholder="Enter Email"
                    required/>
                </div>
                <button className="button" type="submit">Update Profile</button>

            </form>
        </div>
    )
}
export default Edit;
