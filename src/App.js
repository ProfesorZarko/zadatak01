import './App.css';
import TableMemorijaZaRačunare from './components/TableMemorijaZaRačunare';
import Zadatak01 from './pages/Zadatak01';
import Daki from "./pages/Daki.jsx"
function App() {
  return (
      <div className="App">
      <header className="App-header">
      <TableMemorijaZaRačunare />
        <Zadatak01 />
      </header>
            <Daki />
    </div>
  );
}

export default App;
