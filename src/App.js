import './App.css';
import TableMemorijaZaRačunare from './components/TableMemorijaZaRačunare';
import Zadatak01 from './pages/Zadatak01';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TableMemorijaZaRačunare />
        <h2>ala se ovo vrti Daki</h2>
        <Zadatak01 />
          Learn React
      </header>
      <TableMemorijaZaRačunare />
    </div>
  );
}

export default App;
