import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
	const { transactions } = useContext(GlobalContext);

	const income = transactions
		.filter((trans) => trans.amount > 0)
		.reduce((acc, item) => acc + item.amount, 0);

	const expenses = transactions
		.filter((trans) => trans.amount < 0)
		.reduce((acc, item) => acc + item.amount, 0);

	return (
		<div className="inc-exp container">
			<div>
				<h4>Income</h4>
				<p>${income}</p>
			</div>
			<div>
				<h4>Expenses</h4>
				<p>${expenses}</p>
			</div>
		</div>
	);
};

export default IncomeExpense;
