import React from "react";
import "./App.css";
import AddTransaction from "./Components/AddTransaction";
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import IncExp from "./Components/IncExp";
import TransactionLists from "./Components/TransactionLists";
import GlobalProvider from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div>
        <Header />
        <div className='container'>
          <Balance />
          <IncExp />
          <TransactionLists />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
