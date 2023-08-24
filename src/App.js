import './App.css';
import TableMemorijaZaRačunare from './components/TableMemorijaZaRačunare';
import Zadatak01 from './pages/Zadatak01';
import TableMemorijaZaRačunare from './components/TableMemorijaZaRačunare';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TableMemorijaZaRačunare />
        <Zadatak01 />
      </header>
      <TableMemorijaZaRačunare />
    </div>
  );
}

export default App;
