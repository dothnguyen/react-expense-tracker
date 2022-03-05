import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
	const { transactions } = useContext(GlobalContext);
	const amounts = transactions.map((transactions) => transactions.amount);
	const total = amounts.reduce((acc, item) => acc + item, 0);

	return (
		<div>
			<h4>Balance</h4>
			<h1>{total}</h1>
		</div>
	);
}

export default Balance;
