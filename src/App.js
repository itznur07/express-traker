import "./App.css";
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import IncExp from "./Components/IncExp";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
      <Balance />
      <IncExp />
      </div>
    </div>
  );
}

export default App;
