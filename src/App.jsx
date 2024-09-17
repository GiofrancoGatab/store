import "./App.css";
import FiltherProductTable from "/componemts/FilterProductTable";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <FiltherProductTable>
      <SearchBar />
    </FiltherProductTable>
  );
}

export default App;
