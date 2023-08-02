import {useState,useEffect} from "react"
import {Link} from "react-router-dom"
import Sidebar from "../Sidebar"
import "./index.css"

const TransactionList=[
  {type: '', displayText: 'AllTransactions'},
  {type: 'Debit', displayText: 'Debit'},
  {type: 'Credit', displayText: 'Credit'},
]
function AllTransactions(){
    const [allTransactions, setAll]=useState([])

    const fetchAllTransactionsApi=async()=>{
        const allTranUrl="https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=17&offset=1"
        const options={
            headers: {
                "content-type": "application/json",
                "x-hasura-admin-secret":
                  "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
                "x-hasura-role": "admin",
            },
            method: "GET",
        }
        const allTransactionResponse=await fetch(allTranUrl,options)
        const allTransactionData=await allTransactionResponse.json()
        console.log(allTransactionData)
        const formattedAllTranData=allTransactionData.transactions.map(each=>({
            userId:each.user_id,
            transactionName:each.transaction_name,
            type:each.type,
            amount:each.amount,
            category:each.category,
            id:each.id,
            date:each.date
        }))
        setAll(formattedAllTranData)
        console.log(formattedAllTranData)
    }

    useEffect(()=>{
        fetchAllTransactionsApi()
    })
    return(
        <div className="all-tran-bg-container">
            <Sidebar/>
            <div className="all-tran-main-container">
                <nav className="all-tran-nav-container">
                    <div className="all-tran-nav-items">
                        <h1>Transactions</h1>
                        <button type="button">+ AddTransaction</button>
                    </div>
                    <ul className="all-tran-ul-container">
                        <li className="all-tran-li-items">
                            <Link to="/alltransactions">
                            <p>All Transactions</p></Link>
                            <Link to="/debit">
                            <p className="items">Debit</p></Link>
                            <Link to="/credit">
                            <p className="items">Credit</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="all-tran-details-container">
                    <ul className="all-tran-tab-details">
                        <li className="all-tran-tabs-heading">
                        <p className="heading">type</p>
                        <p className="heading">category</p>
                        <p className="heading">date</p>
                        <p className="heading">amount</p>
                        </li>
                        <hr/>
                    </ul>
                <ul className="all-tran-tab-details">
                    {allTransactions.map(each=>{
                        const {transactionName,type,amount,date,}=each;
                        return(
                            <>
                            <li key={each.id} className="all-tran-tabs">
                                <p>{transactionName}</p>
                                <p>{type}</p>
                                <p>{date}</p>
                                <p>{amount}</p>
                            </li>
                            <hr/>
                            </>
                        )
                    })}
                </ul>
                </div>
            </div>
        </div>
    )
}
export default AllTransactions;