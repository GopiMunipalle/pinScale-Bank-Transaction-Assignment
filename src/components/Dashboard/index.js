import {useState,useEffect} from "react"

import Sidebar from "../Sidebar"

import "./index.css"

function Dashboard(){
    const [data,setData]=useState([])

    const fetchLastTransactionApi=async()=>{
        const options={
            method:"GET",
            headers:{
            'x-hasura-admin-secret':'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzY',
            
            },
        }
        const response=await fetch("https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-7-days",options)
        const userTran=await response.json()
        console.log(userTran)
        console.log(response)
        setData(userTran)
    }

    useEffect(()=>{
        fetchLastTransactionApi()
    },[setData])

    return(
        <div className="Home-bg-container">
            <Sidebar/>
            <div className="Home-responsive-container">
                <nav className="dashboard-header">
                    <h1>Accounts</h1>
                    <button type="button" className="dashboard-addtran-btn">+ AddTransaction</button>
                </nav>
                <div className="dashboard-credit-container">
                    <div className="dashboard-credit-card">
                        <h1>$1204</h1>
                        <p>credit</p>
                        <div className="dash-credit-image">
                            <img src="https://img.freepik.com/free-vector/illustration-people-with-creditcard-money_53876-43938.jpg?w=826&t=st=1690623557~exp=1690624157~hmac=82a5617ff941a097e6b9d1d672471f24f896189ca03f68acdfb04dd18cb90c4e"
                            alt="credit" className="credit-logo"/>
                        </div>
                    </div>
                    <div className="dashboard-credit-card">
                        <h1>$1204</h1>
                        <p>Debit</p>
                        <div className="dash-credit-image">
                            <img src="https://img.freepik.com/free-vector/illustration-people-with-creditcard-money_53876-43938.jpg?w=826&t=st=1690623557~exp=1690624157~hmac=82a5617ff941a097e6b9d1d672471f24f896189ca03f68acdfb04dd18cb90c4e"
                            alt="credit" className="credit-logo"/>
                        </div>
                    </div>
                </div>
                <div className="dashboard-transactions-container">
                    <h1>Last Transacion</h1>
                    <div className="dash-transactions-container">
                        <p>one</p>
                        <p>two</p>
                        <p>Three</p>
                    </div>
                </div>
                <div className="dashboard-debit-credit-view-container">
                    <h1>Debit&Credit overview</h1>
                    <div className="dash-transactions-container">
                        <p>one</p>
                        <p>two</p>
                        <p>Three</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;