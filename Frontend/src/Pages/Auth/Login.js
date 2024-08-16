import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../PageStyle/auth/login.css";
const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const navigate = useNavigate();


  const handleInputChange = (event) => {
    const input = event.target.value;
    const numericInput = input.replace(/\D/g, "");
    setMobileNumber(numericInput);
  };

  const handleCountryCode = (event) => {
    setCountryCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/verification");
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Welcome,</h1>
        <p>Enter Mobile Number</p>
      </header>
      <form onSubmit={handleSubmit}>
      <div className="input-box">
          <span className="country-code">+1</span>
          <input
            type="text"
            placeholder="Enter mobile number"
            value={mobileNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="enter-button">Enter</button>
      </form>
    </div>
  );
};
export default Login;
