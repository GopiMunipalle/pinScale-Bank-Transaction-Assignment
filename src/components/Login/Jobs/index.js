import {BsBookmark} from "react-icons/bs"
import {MdAccessTime} from "react-icons/md"
import Header from "../Header"
import "./index.css"

function Jobs(){
    return(
        <div className="jobs-container">
            <Header/>
            <div className="jobs-scroll-container">
            <div className="jobs-card-container">
                <div className="jobs-card">
                <img src="https://tse1.mm.bing.net/th?id=OIP.d-Iiw9KeDbmgBXiSD1M3iQHaHa&pid=Api&P=0&h=180"
                alt="winit" className="logo"/>
                <BsBookmark/>
                </div>
                <h1 className="heading">Sales/Event Co-ordinator</h1>
                <p className="para">Win Information Technology Pvt.ltd</p>
                <p className="side-para">Hyderabad,Telangana,India</p>
                <div className="jobs-para">
                <MdAccessTime/>
                <p className="para"> Actively Recruiting</p>
                </div>
            </div>
            <div className="jobs-card-container">
                <div className="jobs-card">
                <img src="https://tse1.mm.bing.net/th?id=OIP.d-Iiw9KeDbmgBXiSD1M3iQHaHa&pid=Api&P=0&h=180"
                alt="winit" className="logo"/>
                <BsBookmark/>
                </div>
                <h1 className="heading">.Net Developer</h1>
                <p className="para">Win Information Technology Pvt.ltd</p>
                <p className="side-para">Hyderabad,Telangana,India</p>
                <div className="jobs-para">
                <MdAccessTime/>
                <p className="para"> Actively Recruiting</p>
                </div>
            </div>
            <div className="jobs-card-container">
                <div className="jobs-card">
                <img src="https://tse1.mm.bing.net/th?id=OIP.d-Iiw9KeDbmgBXiSD1M3iQHaHa&pid=Api&P=0&h=180"
                alt="winit" className="logo"/>
                <BsBookmark/>
                </div>
                <h1 className="heading">Android Developer</h1>
                <p className="para">Win Information Technology Pvt.ltd</p>
                <p className="side-para">Hyderabad,Telangana,India</p>
                <div className="jobs-para">
                <MdAccessTime/>
                <p className="para"> Actively Recruiting</p>
                </div>
            </div>
            <div className="jobs-card-container">
                <div className="jobs-card">
                <img src="https://tse1.mm.bing.net/th?id=OIP.d-Iiw9KeDbmgBXiSD1M3iQHaHa&pid=Api&P=0&h=180"
                alt="winit" className="logo"/>
                <BsBookmark/>
                </div>
                <h1 className="heading">Web Developer</h1>
                <p className="para">Win Information Technology Pvt.ltd</p>
                <p className="side-para">Hyderabad,Telangana,India</p>
                <div className="jobs-para">
                <MdAccessTime/>
                <p className="para"> Actively Recruiting</p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Jobs;