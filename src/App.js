import "./App.css";
import AddTransaction from "./Components/AddTransaction";
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import IncExp from "./Components/IncExp";
import TransactionLists from "./Components/TransactionLists";

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <IncExp />
        <TransactionLists />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
