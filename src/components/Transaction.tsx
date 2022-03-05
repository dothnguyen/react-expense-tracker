import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "../model/Transaction";

const TransactionItem = (transaction: Transaction) => {
	const sign = transaction.amount < 0 ? "" : "+";

	const { removeTransaction } = useContext(GlobalContext);

	const onRemove = () => {
		if (removeTransaction) removeTransaction(transaction);
	};

	return (
		<li className={transaction.amount < 0 ? "minus" : "plus"}>
			{transaction.label}{" "}
			<span>
				{sign}
				{transaction.amount}
			</span>{" "}
			<button onClick={onRemove}>X</button>
		</li>
	);
};

export default TransactionItem;
