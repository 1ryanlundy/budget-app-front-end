import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <h3 className="Main-Link">
                <Link to="/transactions">Transactions</Link>
            </h3>
            <h1>Budget App</h1>
            <button>
                <Link to="/transactions/new">New Transaction</Link>
            </button>
        </nav>
    )
};