import React, { createContext, useReducer } from "react";
import { Transaction } from "../model/Transaction";

type TransactionsState = {
	transactions: Transaction[];
	addTransaction?: (transaction: Transaction) => void;
	removeTransaction?: (transaction: Transaction) => void;
};

interface TransactionAction {
	type: string;
	payload: Transaction;
}

// Initial State
const InitialState: TransactionsState = {
	transactions: [
		{ id: 1, label: "Flower", amount: -20 },
		{ id: 2, label: "Salary", amount: 500 },
	],
};

const reducerFunc = (state: TransactionsState, action: TransactionAction) => {
	const { type, payload } = action;
	switch (type) {
		case "ADD_TRANSACTION":
			return {
				transactions: [...state.transactions, payload],
			};

		case "REMOVE_TRANSACTION":
			return {
				transactions: state.transactions.filter(
					(trans) => trans.id !== payload.id
				),
			};
		default:
			return state;
	}
};

// Create Context
export const GlobalContext = createContext<TransactionsState>(InitialState);

// Provider Component
export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(reducerFunc, InitialState);

	function addTransaction(transaction: Transaction) {
		dispatch({
			type: "ADD_TRANSACTION",
			payload: transaction,
		});
	}

	function removeTransaction(transaction: Transaction) {
		dispatch({
			type: "REMOVE_TRANSACTION",
			payload: transaction,
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				addTransaction,
				removeTransaction,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
