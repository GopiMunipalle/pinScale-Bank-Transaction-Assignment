import { useState } from "react"
import Header from "../Header"
import {BiLike} from "react-icons/bi"
import {AiTwotoneLike} from "react-icons/ai"
import {MdInsertComment} from "react-icons/md"
import {IoIosShareAlt} from "react-icons/io"
import "./index.css"

function Posts(){
    const [click,setClick]=useState(false)

    const onClickLike=()=>{
        setClick(prevState=>!prevState)
    }
    const buttonClass=click?(<BiLike/>):(<AiTwotoneLike/>)
    return(
        <div className="photos-container">
            <Header/>
            <div className="photo-card-main-container">
            <div className="photo-card-container">
            <div className="photos-card">
            <img src="https://tse1.mm.bing.net/th?id=OIP.d-Iiw9KeDbmgBXiSD1M3iQHaHa&pid=Api&P=0&h=180"
                alt="winit" className="logo"/>
                <div className="photo-item">
                <h1 className="photo-heading">Win Information Technology Pvt Ltd</h1>
                <p className="side-para">9,496 Followers</p>
                </div>
            </div>
            <p>thinkingmobile #mSFA #comingsoon</p>
            <img src="https://media.licdn.com/dms/image/C4E22AQH1z5E0PZGlgQ/feedshare-shrink_800/0/1592717218530?e=1695254400&v=beta&t=DkuLEL5bqyC3dA-osnFT2G2iGRzp1fPdMB3H4ghT6jE"
            alt="logo" className="image-s"/>
            <div className="button-container">
            <button type="button" className="button-item" onClick={onClickLike}>{buttonClass}</button>
            <button type="button" className="button-item"><MdInsertComment/></button>
            <button type="button" className="button-item"><IoIosShareAlt/></button>
            </div>
            </div>
            <div className="photo-card-container">
            <div className="photos-card">
            <img src="https://tse1.mm.bing.net/th?id=OIP.d-Iiw9KeDbmgBXiSD1M3iQHaHa&pid=Api&P=0&h=180"
                alt="winit" className="logo"/>
                <div className="photo-item">
                <h1 className="photo-heading">Win Information Technology Pvt Ltd</h1>
                <p className="side-para">9,496 Followers</p>
                </div>
            </div>
            <p className="side-para">
                Happy Independence Day!</p>
            <img className="image-s" src="https://media.licdn.com/dms/image/D5622AQFNs6sCzSDx9Q/feedshare-shrink_800/0/1692101617074?e=1695254400&v=beta&t=PXu0fSizORumX5n7ZSWr8xqiTt0npAZIxwIzgfX7Tf4"
            alt="logo"/>
            <div className="button-container">
            <button type="button" className="button-item" onClick={onClickLike}>{buttonClass}</button>
            <button type="button" className="button-item"><MdInsertComment/></button>
            <button type="button" className="button-item"><IoIosShareAlt/></button>
            </div>
            </div>
            <div className="photo-card-container">
            <div className="photos-card">
            <img src="https://tse1.mm.bing.net/th?id=OIP.d-Iiw9KeDbmgBXiSD1M3iQHaHa&pid=Api&P=0&h=180"
                alt="winit" className="logo"/>
                <div className="photo-item">
                <h1 className="photo-heading">Win Information Technology Pvt Ltd</h1>
                <p className="side-para">9,496 Followers</p>
                </div>
            </div>
            <p> #SingaporeNationalDay #UnityInDiversity #NationalDayCheers #WINIT
            </p>
            <img className="image-s" src="https://media.licdn.com/dms/image/D5622AQH0ZVs9K-yLgA/feedshare-shrink_2048_1536/0/1691571794589?e=1695254400&v=beta&t=hcuy0ZT88WfXjnQ70O20z4fO3iKMGtSnYlhJyUkfTBE"
            alt="logo"/>
            <div className="button-container">
            <button type="button" className="button-item" onClick={onClickLike}>{buttonClass}</button>
            <button type="button" className="button-item"><MdInsertComment/></button>
            <button type="button" className="button-item"><IoIosShareAlt/></button>
            </div>
            </div>
            <div className="photo-card-container">
            <div className="photos-card">
            <img src="https://tse1.mm.bing.net/th?id=OIP.d-Iiw9KeDbmgBXiSD1M3iQHaHa&pid=Api&P=0&h=180"
                alt="winit" className="logo"/>
                <div className="photo-item">
                <h1 className="photo-heading">Win Information Technology Pvt Ltd</h1>
                <p className="side-para">9,496 Followers</p>
                </div>
            </div>
            <p>Celebrating 27 years of excellence at WINIT!</p>
            <img className="image-s" src="https://media.licdn.com/dms/image/D5622AQHwAGIMdKcqkg/feedshare-shrink_800/0/1687021359251?e=1695254400&v=beta&t=EmCw9RKCZe58k7nyBOe_sk5DbHP3B3A0a0Ycp-FqWR4"
            alt="logo"/>
            <div className="button-container">
            <button type="button" className="button-item" onClick={onClickLike}>{buttonClass}</button>
            <button type="button" className="button-item"><MdInsertComment/></button>
            <button type="button" className="button-item"><IoIosShareAlt/></button>
            </div>
            </div>
            <div className="photo-card-container">
            <div className="photos-card">
            <img src="https://tse1.mm.bing.net/th?id=OIP.d-Iiw9KeDbmgBXiSD1M3iQHaHa&pid=Api&P=0&h=180"
                alt="winit" className="logo"/>
                <div className="photo-item">
                <h1 className="photo-heading">Win Information Technology Pvt Ltd</h1>
                <p className="side-para">9,496 Followers</p>
                </div>
            </div>
            <p>#WINIT #supervisor</p>
            <img className="image-s" src="https://media.licdn.com/dms/image/C5122AQHuIevaambEmg/feedshare-shrink_800/0/1567410632375?e=1695254400&v=beta&t=pZYC-yuOMZCEDnFFOxSSbv-rdCqVDfk4qe0VOtR0DAM"
            alt="logo"/>
            <div className="button-container">
            <button type="button" className="button-item" onClick={onClickLike}>{buttonClass}</button>
            <button type="button" className="button-item"><MdInsertComment/></button>
            <button type="button" className="button-item"><IoIosShareAlt/></button>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Posts;