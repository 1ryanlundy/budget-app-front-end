import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

function TransactionDetails() {
    const navigate = useNavigate();
    const [transaction, setTransaction] = useState({});
    let { index } = useParams();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/transactions/${index}`)
            .then((res) => {
                setTransaction(res.data);
            })
            .catch((error) => {
                console.error("catch", error)
            });
    }, []);


    const handleDelete = () => {
        axios
            .delete((`${process.env.REACT_APP_URL}/transactions/${index}`))
            .then(() => {
                navigate("/transactions");
            })
    };

    return (
        <article className="transactionDetails">
            <h1>
                {transaction.name}
            </h1>
            <h3>
                {transaction.date}
            </h3>
            <h1>
                {transaction.isExpense ? <span>➖</span> : <span>➕</span>} {transaction.amount}
            </h1>
            <div className="showNavigation">
                <div>
                    {" "}
                    <Link to={`/transactions`}>
                        <button>Back</button>
                    </Link>
                </div>
                <div>
                    {" "}
                    <Link to={`/transactions/${index}/edit`}>
                        <button>Edit</button>
                    </Link>
                </div>
                <div>
                    {" "}
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </article>
    )
};

export default TransactionDetails;