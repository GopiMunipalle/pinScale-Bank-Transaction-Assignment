import { Link } from "react-router-dom";
import Header from "../Header"
import "./index.css"

function About(){
    return(
        <div className="about-container">
            <Header/>
            <div className="about-card">
            <h1 className="heading">Overview</h1>
            <p className="about-para">We are a Sales Force Automation Technology company that has evolved from the industry expertise we have gained over 25+ years.
            With over 600 success stories in mobility, digitization, and consultation, 
            we are today the leaders in mSFA, with over 75+ Enterprises trusting WINIT across the globe.</p>
            <p className="about-para">Our state-of-the-art support centre provides 24x7 support to our customers worldwide. 
            We continuously strive to help organizations improve their efficiency, effectiveness,
            market cap, brand recognition, distribution and logistics, regulatory and planogram compliance, and many more through our cutting-edge Omni Channel Solution.</p>
            <p className="about-para">
            We are committed to enabling our customers to be autonomous with our continuous R&D and improvement in our solution.
            Our application provides customers 
            with machine learning capability so they innovate, attain sustainable growth, and become resilient.</p>
            <p className="about-para">
            At WINIT, we value diversity, personal and 
            professional growth, and celebrate our global team of passionate individuals who are continuously innovating our 
            technology to help companies tackle real-world problems head-on.</p>
            <p className="about-para">Follow us on LinkedIn: https://www.linkedin.com/company/winitsfa<br/>
                Follow us on Twitter: https://twitter.com/winitsfa<br/>
                Website: http://www.winitsoftware.com<br/>
                Phone: +91-40-67308800</p>
            <h1 className="heading">Website</h1>
            <p className="link"><Link  to="http://www.winitsoftware.com">http://www.winitsoftware.com</Link></p>
            <h1 className="heading">Phone</h1>
            <p className="link"><Link to="+91-40-67308800">+91-40-67308800</Link></p>
            <h1 className="heading">industry</h1>
            <p className="about-para">IT Services and IT Consulting</p>
            <h1 className="heading">Company Size</h1>
            <p className="about-para">201-500 employees<br/>
            189 on LinkedIn</p>
            <h1 className="heading">Headquarters</h1>
            <p className="about-para">Hyderabad, Andhra Pradesh</p>
            <h1 className="heading">Founded</h1>
            <p className="about-para">1997</p>
            <h1 className="heading">Specialties</h1>
            <p className="about-para">Mobile Sales Force Automation, msfa, SFA, Sales Force Automation,
            Van Sales, Pre-Sales, Merchandising, Supervisor, Promoter, Distributor Management System, Distrbutor Management Solutions ,
            Delivery Solution, FMCG Sales Management, Sales Enablement Solution, Field Sales Management, Field Sales Solution, Retail Execution Solution, 
            Digital Sales Enablement, Sales Performance Management, Consumer Goods Sales Management, Sales and Distribution Management, Direct Store Delivery Solution, 
            Mobile Order Management, Route Optimization Solutions,
            Sales Analytics and Reporting, FMCG Machine Learning, and FMCG Artifical Intelligence</p>
            </div>
        </div>
    )
}

export default About;