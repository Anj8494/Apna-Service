import { useState } from "react";
import '../stylecomponent/login.css'
import { useNavigate } from "react-router-dom";
const Login=()=>
    {
        const [email,setEmail] = useState('');
        const [password, setPassword] =useState('')
        const navigate=useNavigate();

        const handleLogin=(event)=>{
            event.preventDefault();
            console.log('Email:', email, 'Password:', password);
            if(password.length < 6)
            {
                alert("password should be longer then 6 characters")
            }
            else
            {
                navigate('/dashboard')
            }
        };
    return(
        <div className="login-container">
            <div className="login-image">
                <img src="https://img.freepik.com/premium-vector/business-man-teacher-giving-employee-people-lecture-presentation-board-room_999327-94172.jpg?ga=GA1.1.309937272.1722530290&semt=ais_hybrid"
                alt="image"/>
            </div>
            <div className="login-form">
                <h2>Welcome to Admin !👋</h2>
                <p>Please sign-in to your account and start the adventure</p>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        id="email"
                        placeholder="anj@65.com"
                        value={email}
                        onChange={(event)=> setEmail(event.target.value)}
                        required
                         />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password"
                        id="password"
                        placeholder="password"
                        value={password}
                        onChange={(event)=>setPassword(event.target.value)}
                        required />
                    </div>
                    <button type="submit" className="login-button" >Sign-in</button>

                </form>

            </div>

        </div>
    )
}
export default Login;