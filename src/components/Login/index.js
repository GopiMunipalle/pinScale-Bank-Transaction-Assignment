import {useState} from "react"
import { useNavigate } from 'react-router-dom';
import "./index.css"


function Login(){
    let navigate=useNavigate();
    const users = [
        {email: 'admin@gmail.com', password: 'Admin@123'}
        
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
            navigate("/home")
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
                <img src="https://tse1.mm.bing.net/th?id=OIP.d-Iiw9KeDbmgBXiSD1M3iQHaHa&pid=Api&P=0&h=180"
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