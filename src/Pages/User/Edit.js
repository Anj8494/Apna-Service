import { useState } from "react";
import edit from '../../PageStyle/User/edit.css'
import { Navigate, useNavigate } from "react-router-dom";
const Edit=()=>{
    const [fullName, setFullName] =useState("");
    const [mobileNo, setMobileNo] =useState("");
    const [email, setEmail] = useState("");
    const navigate =useNavigate();

    const handlSubmit=(event)=>{
        event.preventDefault();
        console.log('form submitted:', {fullName, mobileNo, email});
        navigate('/profile')
    }

    return(
        <div className="edit-account-container">
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
                    onChange={(event)=>setMobileNo(event.target.value)}
                    placeholder="Enter Mobie Number"
                    required/>
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
                <button type="submit">Update Profile</button>

            </form>
        </div>
    )
}
export default Edit;
