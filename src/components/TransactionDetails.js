import { useEffect, useNavigate } from "react";
import axios from "axios";

function TransactionDetails(transaction, index) {

    const navigate = useNavigate();

    const handleDelete = () => {
        axios
            .delete((`${process.env.REACT_APP_URL}/transactions/${index}`))
            .then(() => {
                navigate("transactions");
            })
        window.location.reload();
    };

    return (
        <article className="transactionDetails">

        </article>
    )
};

export default TransactionDetails;