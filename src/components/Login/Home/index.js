import { useState } from "react"
import Header from "../Header"
import "./index.css"

function Home(){
    

    const [isReadMore, setIsReadMore] = useState(false)
    const reactHooksDescription='We are a Sales Force Automation Technology company that has evolved from the industry expertise we have gained over 25+ years. With over 600 success stories in mobility, digitization, and consultation, we are today the leaders in mSFA, with over 75+ Enterprises trusting WINIT across the globe.Our state-of-the-art support centre provides 24x7 support to our customers worldwide. We continuously strive to help organizations improve their efficiency, effectiveness, market cap, brand recognition, distribution and logistics, regulatory and planogram compliance, and many more through our cutting-edge Omni Channel Solution.We are committed to enabling our customers to be autonomous with our continuous R&D and improvement in our solution. Our application provides customers with machine learning capability so they innovate, attain sustainable growth, and become resilient.At WINIT, we value diversity, personal and professional growth, and celebrate our global team of passionate individuals who are continuously innovating our technology to help companies tackle real-world problems head-on.'
  const description = isReadMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)
  const buttonText = isReadMore ? 'Read Less' : 'Read More'

  const onClickButton = () => setIsReadMore(prevStatus => !prevStatus)
    

    return(
        <div className="home-container">
            <Header/>
            <div className="home-content-container">
                <h1 className="heading">Win Information Technology Pvt Ltd</h1>
                <p className="para">We help our customers "SELL MORE - SELL BETTER"</p>
                <p className="side-para">IT Services and IT Consulting Hyderabad, Andhra Pradesh 9,497 followers 189 employees</p>
            </div>
            <div className="home-about">
             <h1 className="heading">About</h1>   
            <p>{description}<button type="button" className="button" onClick={onClickButton}>
            <span className="span">{buttonText}</span>
            </button></p>
            <hr className="line"/>
            </div>
            <p className="para">Follow us on LinkedIn: <a href="https://www.linkedin.com/company/winitsfa">https://www.linkedin.com/company/winitsfa</a></p>
            <p className="para">Follow us on Twitter: <a href="https://twitter.com/winitsfa">https://twitter.com/winitsfa</a></p>
            <p className="para">Website: <a href="http://www.winitsoftware.com">http://www.winitsoftware.com</a></p>
            <p className="para">Phone: +91-40-67308800</p>
        </div>
    )
}export default Home;