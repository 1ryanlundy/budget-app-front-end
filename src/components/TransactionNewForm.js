import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TransactionNewForm() {
    const navigate = useNavigate();
    const [transaction, setTransaction] = useState({
        "name": "",
        "date": "",
        "amount": 0,
        "isExpense": false
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post(`${process.env.REACT_APP_URL}/transactions`, transaction)
            .then(() => { navigate("/transactions"); })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleTextChange = (event) => {
        setTransaction({ ...transaction, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setTransaction({ ...transaction, isExpense: !transaction.isExpense });
    };



    return (
        <div className="New">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Transaction Name:</label>
                <input
                    id="name"
                    type="text"
                    value={transaction.name}
                    onChange={handleTextChange}
                    placeholder="Name of Transaction"
                    required
                />
                <label htmlFor="date">Date:</label>
                <input
                    id="date"
                    type="text"
                    value={transaction.date}
                    onChange={handleTextChange}
                    placeholder="Date of Transaction"
                    required
                />
                <label htmlFor="amount">Transaction Amount:</label>
                <br />
                <label htmlFor="amount">$</label>
                <input
                    id="amount"
                    type="number"
                    value={transaction.amount}
                    onChange={handleTextChange}
                    placeholder="-"
                />
                <label htmlFor="isExpense">Check if this is an expense:</label>
                <input
                    id="isExpense"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={transaction.isExpense}
                />
                <input type="submit" />
            </form>
        </div>
    )
};

export default TransactionNewForm;