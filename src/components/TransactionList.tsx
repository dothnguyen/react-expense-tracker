import React, { useContext } from "react";
import TransactionItem from "./Transaction";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "../model/Transaction";

const TransactionList = () => {
	const { transactions } = useContext(GlobalContext);

	return (
		<div>
			<h3>History</h3>
			<ul className="list">
				{transactions.map((transaction: Transaction) => (
					<TransactionItem {...transaction} />
				))}
			</ul>
		</div>
	);
};

export default TransactionList;
