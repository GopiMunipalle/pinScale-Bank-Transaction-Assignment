import {useState} from "react"
import { useNavigate } from 'react-router-dom';
import "./index.css"


function Login(){
    let navigate=useNavigate();
    const users = [
        {email: 'admin@gmail.com', password: 'Admin@123', role: 'admin',userId:0},
        {email: 'jane.doe@gmail.com', password: 'janedoe@123', userId: 1},
        {email: 'samsmith@gmail.com', password: 'samsmith@123', userId: 2},
        {email: 'rahul@gmail.com', password: 'rahul@123', userId: 4},
        {email: 'teja@gmail.com', password: 'teja@123', userId: 5},
        {email: 'loki@gmail.com', password: 'loki@123', userId: 6},
        {email: 'ramesh@gmail.com', password: 'ramesh@123', userId: 7},
        {email: 'suresh@gmail.com', password: 'suresh@123', userId: 8},
        {email: 'prem@gmail.com', password: 'prem@123', userId: 9},
        {email: 'piyush@gmail.com', password: 'piyush@123', userId: 10},
        {email: 'isha@gmail.com', password: 'isha@123', userId: 12},
        {email: 'seema@gmail.com', password: 'seema@123', userId: 14},
        {email: 'seema@123', password: 'arjun@123', userId: 15},
        {email: 'radha@gmail.com', password: 'radha@123', userId: 16},
        {email: 'phani@gmail.com', password: 'phani@123', userId: 17}
    ]
    
    const [state,setState]=useState({
        username:'',
        password:'',
        error:""
    })
    
    const onSubmitForm = async (e) => {
        
        e.preventDefault()
        const user = users.find(
            user => user.email === state.username && user.password === state.password,
        )
        setState({...state,error:""})
      
        if (!user) {
            setState({...state,error:'Invalid email or password.'})
        }
        else{
            const {role,userId}=user
            console.log(role)

            if(role==="admin"){
                navigate(`/dashboard/${userId}`)
            }
            else{
                navigate("/userdashboard")
            }
        }
    };

    const onChangeUsername=(e)=>{
        setState({...state,username:e.target.value})
    }

    const onChangePassword=(e)=>{
        setState({...state,password:e.target.value})
    }

    return(
        <div className="login-bg-container">
            <form className="login-input-container" onSubmit={onSubmitForm}>
                <img src="https://i.pinimg.com/736x/f4/4e/43/f44e437669d807bf5e4b729515297347.jpg"
                alt="pinscale" className="login-logo"/>
                <div className="input-card">
                    <label for="input">Username</label>
                    <input className="input" type="email" onChange={onChangeUsername} value={state.username} id="username" placeholeder="Enter username"/>
                </div>
                <div className="input-card">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="input" onChange={onChangePassword} value={state.password}  id="password" placeholeder="Enter Password"/>
                </div>    
                {state.error && <p className="login-error-msg">{state.error}</p>}
                <button type="submit" className="login-btn">Login</button>
                
            </form>
        </div>
    )
}
export default Login;