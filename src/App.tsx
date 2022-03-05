import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";

import { GlobalProvider } from "./context/GlobalState";
import AddTransaction from "./components/AddTransaction";

function App() {
	return (
		<>
			<GlobalProvider>
				<Header />
				<Balance />
				<IncomeExpense />
				<TransactionList />
				<AddTransaction />
			</GlobalProvider>
		</>
	);
}

export default App;
