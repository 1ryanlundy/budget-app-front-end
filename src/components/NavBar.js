import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <h3 className="transactionsLink">
                <Link to="/transactions">Transactions</Link>
            </h3>
            <h1>
                <Link className="budgetAppLink" to="/">Budget App</Link>
            </h1>
            <button>
                <Link to="/transactions/new">New Transaction</Link>
            </button>
        </nav>
    )
};