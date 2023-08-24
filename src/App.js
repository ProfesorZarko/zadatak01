import './App.css';
import Zadatak01 from './pages/Zadatak01';
import TableMemorijaZaRačunare from './components/TableMemorijaZaRačunare';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TableMemorijaZaRačunare />
        <Zadatak01 />
      </header>
    </div>
  );
}

export default App;
