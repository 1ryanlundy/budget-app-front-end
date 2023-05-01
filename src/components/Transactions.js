import { useState, useEffect } from "react";
import axios from "axios";
import Transaction from "./Transaction";


export default function Transactions() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/transactions`)
            .then((res) => {
                setTransactions(res.data);
            })
            .catch((error) => {
                console.error("catch", error)
            });
    }, []);

    return (
        <div className="Logs">
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
        </div>
    )
};