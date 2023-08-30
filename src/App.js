import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Daki from "./pages/Daki.jsx"
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path='/' element={<Home/> } />
            <Route path='daki' element={<Daki />} />
          </Routes>
            
    </div>
    </BrowserRouter>
  );
}

export default App;
