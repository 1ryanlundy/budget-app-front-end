import { useState, useEffect } from "react";
import axios from "axios";
import Transaction from "./Transaction";


export default function Transactions() {
    const [transactions, setTransactions] = useState([]);
    const [amountColor, setAmountColor] = useState({});

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/transactions`)
            .then((res) => {
                setTransactions(res.data);
            })
            .catch((error) => {
                console.error("catch", error)
            });
    }, []);


    const totalAmount = transactions.reduce((acc, transaction) => {
        const { amount, isExpense } = transaction;
        return isExpense ? acc - Number(amount) : acc + Number(amount)

    }, 0)

    useEffect(() => {
        if (totalAmount < 0) {
            setAmountColor({ color: "red" })
        } else if (totalAmount >= 0 && totalAmount <= 100) {
            setAmountColor({ color: "yellow" })
        } else {
            setAmountColor({ color: " #0bc963" })
        }
    }, [totalAmount])

    return (
        <div className="transactions">
            <h2>Transactions</h2>
            <br />
            <br />
            <br />
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Income or Expense</th>
                            <th>Transaction Name</th>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => {
                            return < Transaction key={index} transaction={transaction} index={index} />
                        })}
                    </tbody>
                </table>
            </section>
            <br />
            <br />
            <h2 className="accountTotal">Account Total: <span style={amountColor}>{totalAmount}</span> </h2>
        </div>
    )
};