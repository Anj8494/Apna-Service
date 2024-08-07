import { useState } from "react";
import { useNavigate} from 'react-router-dom'
import '../../PageStyle/auth/login.css'
const Login =()=>
    {
        const[mobileNumber,setMobileNumber]= useState("");
        const [countryCode, setCountryCode] = useState("")
        const navigate = useNavigate();

        const handleInputChange=(event)=>{
            const input = event.target.value;
            const numericInput = input.replace(/\D/g, '');
            setMobileNumber(numericInput)
        };

        const handleCountryCode=(event) =>{
            setCountryCode(event.target.value);
        }
         
        const handleSubmit =(event)=>{
            event.preventDefault();
            navigate('/verification');
        };

    return<div className="App">
        <header className="app-header">
                <h1>Welcome,</h1>
                <p>Enter Mobile Number</p>
            </header>
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <select className="span" value={countryCode} onChange={handleCountryCode}>
                        <option value="+1">+1</option>
                        <option value="+91">+91</option>
                        <option value="+2">+2</option>
                    </select>
                    {/* <input 
                    type="text"
                    placeholder="+1"
                    className="span"
                    value={countryCode}
                    onChange={handleCountryCode}/> */}
                    <input
                    type="tel"
                    value={mobileNumber}
                    onChange={handleInputChange}
                    placeholder="987654321"
                    required
                    />
                </div>
                <button className="button" type="submit">Enter</button>
            </form>

        </div>
        
}
export default Login;