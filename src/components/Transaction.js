import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Transaction({ transaction, index }) {

    return (
        <tr className="Transaction">
            <td>
                {transaction.isExpense ? (
                    <span>➖</span>
                ) : (
                    <span>➕</span>
                )}
            </td>
            <td>
                <a href={`/transactions/${index}`}>{transaction.name}</a>
            </td>
            <td>
                <p>{transaction.date}</p>
            </td>
            <td>
                <p>{transaction.amount}</p>
            </td>
        </tr>
    )
};

export default Transaction;