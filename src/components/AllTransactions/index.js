import Sidebar from "../Sidebar"
import "./index.css"

const TransactionList=[
  {type: '', displayText: 'AllTransactions'},
  {type: 'Debit', displayText: 'Debit'},
  {type: 'Credit', displayText: 'Credit'},
]
function AllTransactions(){
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
                        {TransactionList.map(each=>{
                            const {displayText,type}=each
                            return(
                                <button type="button" className="all-tran-li-items">
                                <li key={type}>
                                    <li>{displayText}</li>
                                </li>
                                </button>
                            )
                        })}
                    </ul>
                </nav>
                <div className="all-tran-details-container">
                    <ul className="all-tran-tab-details">
                        {TransactionList.map(each=>{
                            const {displayText,type}=each
                            return(
                                <button type="button" className="all-tran-tabs">
                                <li key={type}>
                                    <li>{displayText}</li>
                                </li>
                                </button>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default AllTransactions;