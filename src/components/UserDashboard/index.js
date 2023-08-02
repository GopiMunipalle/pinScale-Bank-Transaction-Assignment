import {useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import Sidebar from "../Sidebar"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import "./index.css"

function UserDashboard(){
  const {userId}=useParams();
  console.log(userId)
    const [lastTransactionData,setData]=useState([])
    const [credit,setCredit]=useState([])
    const [debit,setDebit]=useState([])
    const [dailyCharts,setCharts]=useState([])

    const totalCreditsApiUrl ='https://bursting-gelding-24.hasura.app/api/rest/transaction-totals-admin?transaction_type=credit';
    const totalDebitsApiUrl ='https://bursting-gelding-24.hasura.app/api/rest/transaction-totals-admin?transaction_type=debit';
    const dailyChartDataApiUrl ='https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-last-7-days-admin';
    const lastTransactionUrl ="https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=3&&offset=0";

    const fetchLastTransactionApi=async()=>{  
    const options = {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role": "admin",
        "x-hasura-user-id": userId,
      },
      method: "GET",
    };
    const response = await fetch(lastTransactionUrl, options);
    const responsiveData = await response.json();
    const formattedData=responsiveData.transactions.map(each=>({
      id:each.id,
      transactionName:each.transaction_name,
      type:each.type,
      category:each.category,
      amount:each.amount,
      userId:each.user_id,
      date:each.date
    }))
    console.log(response)
      setData(formattedData)
    }

    const fetchCreditApi=async()=>{  
      const options = {
        headers: {
          "content-type": "application/json",
          "x-hasura-admin-secret":
            "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
          "x-hasura-role": "admin",
          "x-hasura-user-id": userId,
        },
        method: "GET",
      };
      const creditResponse = await fetch(totalCreditsApiUrl, options);
      const creditData = await creditResponse.json();
      console.log(creditResponse)
    }

    const fetchDebitApi=async()=>{  
      const options = {
        headers: {
          "content-type": "application/json",
          "x-hasura-admin-secret":
            "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
          "x-hasura-role": "admin",
          "x-hasura-user-id": userId,
        },
        method: "GET",
      };
      const debitResponse = await fetch(totalDebitsApiUrl, options);
      const debitData = await debitResponse.json();
      console.log(debitResponse)
    }

    const fetchChartApi=async()=>{  
      const options = {
        headers: {
          "content-type": "application/json",
          "x-hasura-admin-secret":
            "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
          "x-hasura-role": "admin",
          "x-hasura-user-id": userId,
        },
        method: "GET",
      };
      const chartResponse = await fetch(dailyChartDataApiUrl, options);
      const chartData = await chartResponse.json();
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const formattedChartData = chartData.last_7_days_transactions_totals_admin.map(each => {
        const date = new Date(each.date);
        return {
          dayOfWeek: daysOfWeek[date.getDay()],
          credit: each.type === "credit" ? each.sum : 0,
          debit: each.type === "debit" ? each.sum : 0,
        };
      });  
      setCharts(formattedChartData)
      console.log(formattedChartData)
      }

    useEffect(()=>{
        fetchLastTransactionApi();
        fetchCreditApi();
        fetchDebitApi();
        fetchChartApi();
    },[])

    const addTransaction=()=>{
        window.alert("Add Transaction")
    }
    return(
        <div className="Home-bg-container">
            <Sidebar/>
            <div className="Home-responsive-container">
                <nav className="dashboard-header">
                    <h1>Accounts</h1>
                    <button type="submit" onClick={addTransaction} className="dashboard-addtran-btn">+ AddTransaction</button>
                </nav>
                <div className="dashboard-credit-container">
                  <div className="dashboard-credit-card">
                      <h2>credit</h2>
                      <p>$1200</p>
                      <img src="https://i.pinimg.com/564x/b9/a8/1c/b9a81c983e19494f0273d290bd2491b4.jpg"
                      alt="credited" className="credit-logo"/>
                  </div>
                  <div className="dashboard-credit-card">
                      <h2>Debit</h2>
                      <p>$1500</p>
                      <img src="https://i.pinimg.com/564x/5c/82/1e/5c821e5952cef577a3b0788eb317d847.jpg"
                      alt="credited" className="credit-logo"/>
                  </div>
                </div>
                <div className="dashboard-transactions-container">
                  <h2 className="dashboard-heading">Last Transaction</h2>
                  <ul className="dash-transactions-container">
                    {lastTransactionData.map(each=>{
                      const {transactionName,category,amount,date,type}=each;
                      return(
                        <li key={each.id} className="dash-transactions-container-items">
                           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <circle cx="15" cy="15" r="14" stroke="#FE5C73" stroke-width="2"/>
                            <path d="M14.4697 21.5303C14.7626 21.8232 15.2374 21.8232 15.5303 21.5303L20.3033 16.7574C20.5962 16.4645 20.5962 15.9896 20.3033 15.6967C20.0104 15.4038 19.5355 15.4038 19.2426 15.6967L15 19.9393L10.7574 15.6967C10.4645 15.4038 9.98959 15.4038 9.6967 15.6967C9.40381 15.9896 9.40381 16.4645 9.6967 16.7574L14.4697 21.5303ZM14.25 10.5L14.25 21L15.75 21L15.75 10.5L14.25 10.5Z" fill="#FE5C73"/>
                          </svg>
                           <p className="dash-transactions-container-items">{transactionName}</p>
                           <p className="dash-transactions-container-items">{category}</p>
                           <p className="dash-transactions-container-items">{date}</p>
                           <p className="dash-transactions-container-items">{type}</p>
                           <p className="dash-transactions-container-items">{amount}</p>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clip-path="url(#clip0_1_1510)">
                              <path d="M14.9998 1.66669L18.3332 5.00002M1.6665 18.3334L2.73017 14.4332C2.79957 14.1788 2.83426 14.0516 2.88753 13.9329C2.93482 13.8276 2.99294 13.7274 3.06093 13.6341C3.13752 13.529 3.23076 13.4358 3.41726 13.2493L12.0284 4.63809C12.1934 4.47308 12.2759 4.39058 12.3711 4.35967C12.4548 4.33248 12.5449 4.33248 12.6286 4.35967C12.7237 4.39058 12.8062 4.47308 12.9712 4.63809L15.3618 7.02862C15.5268 7.19362 15.6093 7.27613 15.6402 7.37126C15.6674 7.45495 15.6674 7.54509 15.6402 7.62878C15.6093 7.72391 15.5268 7.80642 15.3618 7.97143L6.75059 16.5826C6.5641 16.7691 6.47085 16.8623 6.36574 16.9389C6.27241 17.0069 6.17227 17.065 6.06693 17.1123C5.94829 17.1656 5.82107 17.2003 5.56662 17.2697L1.6665 18.3334Z" stroke="#2D60FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_1_1510">
                                <rect width="20" height="20" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M13.3333 5.00002V4.33335C13.3333 3.39993 13.3333 2.93322 13.1517 2.5767C12.9919 2.2631 12.7369 2.00813 12.4233 1.84834C12.0668 1.66669 11.6001 1.66669 10.6667 1.66669H9.33333C8.39991 1.66669 7.9332 1.66669 7.57668 1.84834C7.26308 2.00813 7.00811 2.2631 6.84832 2.5767C6.66667 2.93322 6.66667 3.39993 6.66667 4.33335V5.00002M8.33333 9.58335V13.75M11.6667 9.58335V13.75M2.5 5.00002H17.5M15.8333 5.00002V14.3334C15.8333 15.7335 15.8333 16.4336 15.5608 16.9683C15.3212 17.4387 14.9387 17.8212 14.4683 18.0609C13.9335 18.3334 13.2335 18.3334 11.8333 18.3334H8.16667C6.76654 18.3334 6.06647 18.3334 5.53169 18.0609C5.06129 17.8212 4.67883 17.4387 4.43915 16.9683C4.16667 16.4336 4.16667 15.7335 4.16667 14.3334V5.00002" stroke="#FE5C73" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className="daily-chart">
                  <h3 className="dashboard-heading">Daily Chart</h3>
                  <BarChart width={700} height={400} data={dailyCharts}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="daysOfWeek" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="credit" fill="#8884d8" name="Credit" />
                    <Bar dataKey="debit" fill="#82ca9d" name="Debit" />
                  </BarChart>
                </div>
            </div>
        </div>
    )
}
export default UserDashboard;