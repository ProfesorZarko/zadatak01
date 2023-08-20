import logo from './logo.svg';
import './App.css';
import Zadatak01 from './pages/Zadatak01';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>ala se ovo vrti Daki</h2>
        <Zadatak01 />
          Learn React
      </header>
    </div>
  );
}

export default App;
