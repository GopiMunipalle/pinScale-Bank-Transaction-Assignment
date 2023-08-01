import {useState} from "react"
import "./index.css"


function Login(){
    
    const [state,setState]=useState({
        username:'',
        password:''
    })
    
    const onSubmitForm = async (e) => {
        e.preventDefault()
        const {username,password}=state
        const userDetails={username:"admin@gmail.com",password:"Admin@123"}
        const newUrl ="https://bursting-gelding-24.hasura.app/api/rest/get-user-id";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-hasura-admin-secret":
                  "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
                "x-hasura-role":"admin",
              },
            body:JSON.stringify(userDetails)
        };

            try {
                const response = await fetch(newUrl, options);
                const data = await response.json(); 
                setState(data)
                console.log(response)
                console.log(state)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

    const {username,password}=state

    const onChangeUsername=(e)=>{
        setState(e.target.value)
    }

    const onChangePassword=(e)=>{
        setState(e.target.value)
    }

    return(
        <div className="login-bg-container">
            <form className="login-input-container" onSubmit={onSubmitForm}>
                <img src="https://i.pinimg.com/736x/f4/4e/43/f44e437669d807bf5e4b729515297347.jpg"
                alt="pinscale" className="login-logo"/>
                <div className="input-card">
                    <label for="input">Username</label>
                    <input className="input" type="email" onChange={onChangeUsername} value={username} id="username" placeholeder="Enter username"/>
                </div>
                <div className="input-card">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="input" onChange={onChangePassword} value={password}  id="password" placeholeder="Enter Password"/>
                </div>    
                <button type="submit" className="login-btn">Login</button>
            </form>
        </div>
    )
}
export default Login;