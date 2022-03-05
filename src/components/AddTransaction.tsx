import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "../model/Transaction";

const AddTransaction = () => {
	const [label, setLabel] = useState("");
	const [amount, setAmount] = useState(0);

	const { addTransaction } = useContext(GlobalContext);

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const newTransaction: Transaction = {
			id: Math.floor(Math.random() * 1000000),
			label,
			amount,
		};

		if (addTransaction) addTransaction(newTransaction);

		setLabel("");
		setAmount(0);
	};

	return (
		<>
			<h2>Add new transaction</h2>
			<form onSubmit={onSubmit}>
				<div className="form-control">
					<label htmlFor="text">Label</label>
					<input
						type="text"
						id="text"
						placeholder="Enter label.."
						value={label}
						onChange={(e) => {
							setLabel(e.target.value);
						}}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						(<b>-</b>/<b>+</b>)Amount &nbsp;&nbsp; [-expense,
						+income]
					</label>
					<input
						type="number"
						name="amount"
						id="amount"
						placeholder="Enter amount"
						value={amount}
						onChange={(e) => {
							setAmount(parseInt(e.target.value));
						}}
					/>
				</div>
				<button className="btn">Add transaction</button>
			</form>
		</>
	);
};

export default AddTransaction;
