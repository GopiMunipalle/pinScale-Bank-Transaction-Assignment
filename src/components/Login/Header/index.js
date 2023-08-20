import {useNavigate} from "react-router-dom"

function Header(){
    let navigate=useNavigate()
    const onClickHome=()=>{
        navigate("/home")
    }

    const onClickAbout=()=>{
        navigate("/about")
    }

    const onClickPhotos=()=>{
        navigate("/posts")
    }
    const onClickJobs=()=>{
        navigate("/jobs")
    }
    return(
        <div className="header-container">
            <div>
            <img src="https://2.bp.blogspot.com/-bCbGDNdIZio/Vl1_shxvzhI/AAAAAAAAF9U/yZ_QMn3fNyo/s1600/Winit.png"
            alt="winit" className="home-logo" />
            </div>
            <ul className="ul-container">
                <button className="button" type="button" onClick={onClickHome}><li className="list-items">
                    Home</li></button>
                    <button className="button" type="button" onClick={onClickAbout}><li className="list-items">
                    about</li></button>
                    <button className="button" type="button" onClick={onClickPhotos}><li className="list-items">
                    Posts</li></button>
                    <button className="button" type="button" onClick={onClickJobs}><li className="list-items">
                    Jobs</li></button>
            </ul>
        </div>
    )
}
export default Header