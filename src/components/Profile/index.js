import Sidebar from "../Sidebar"
import "./index.css"

function Profile(){
    return(
        <div className="profile-bg-container">
            <Sidebar/>
            <div className="profile-responsive-container">
                <nav className="profile-nav-container">
                    <div className="profile-nav-items">
                        <h1>Profile</h1>
                        <button type="button">+ AddTransaction</button>
                    </div>
                </nav>
                <div className="profile-details-container">
                <div className="profile-details-image-container">
                    <img src="https://i.pinimg.com/564x/54/8a/65/548a659c2b06a877516d3c998f5b0939.jpg"
                    alt="profile-logo" className="profile-logo"/>
                </div>
                <div className="profile-personal-details-container">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" placeholder="Charlene Reed" className="input"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="input" placeholder="Enter email"/>
                    <label htmlFor="date-field">Date of Birth</label>
                    <input type="date" id="date-field" className="input"/>
                    <label htmlFor="address">Permanent Adress</label>
                    <input type="text" id="address" placeholder="Enter Adress" className="input"/>
                    <label htmlFor="postel">Postel code</label>
                    <input type="text" id="postel" placeholder="Enter Postel Code" className="input"/>
                </div>
                <div className="profile-personal-details-container">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter Username" className="input"/>
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" className="input" placeholder="Enter Password"/>
                    <label htmlFor="present-adress">Present Adress</label>
                    <input type="text" id="present-adress" className="input"/>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" placeholder="City" className="input"/>
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" placeholder="Enter Your Country" className="input"/>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;