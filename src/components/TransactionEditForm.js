import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function TransactionEditForm() {
    let { index } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_URL}/transactions/${index}`)
            .then((response) => {
                setTransaction(response.data)
            })
    }, [index]);

    const [transaction, setTransaction] = useState({
        "name": "",
        "date": "",
        "amount": NaN,
        "isExpense": false
    });

    const handleTextChange = (event) => {
        setTransaction({ ...transaction, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = (event) => {
        setTransaction({ ...transaction, isExpense: !transaction.isExpense })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .put(`${process.env.REACT_APP_URL}/transactions/${index}`, transaction)
            .then((response) => {
                setTransaction(response.data);
                navigate(`/transactions/${index}`);
            })
    };

    return (
        <div className="Edit">
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

}

export default TransactionEditForm;