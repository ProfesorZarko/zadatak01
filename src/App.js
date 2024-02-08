import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Daki from "./pages/Daki.jsx"
import Home from './pages/Home';
import Odeljenje from './pages/Odeljenje';
import InterviewReport from './pages/InterviewReport';
import PersonalCard from './interview/PersonalCard';
import Material from './pages/Material.jsx';
import StaraGodina from './pages/StaraGodina.jsx';
import Dino from './pages/Dino.jsx';
import Januar from './pages/Januar.jsx';
import Februar24 from './pages/Februar24.jsx';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path='/' element={<Home/> } />
            <Route path='daki' element={<Daki />} />
            <Route path='material' element={<Material />} />
            <Route path='stara' element={<StaraGodina />} />
            <Route path='dino' element={<Dino />} />
            <Route path='odeljenje' element={<Odeljenje />} />
            <Route path='januar' element={<Januar />} />
            <Route path='februar' element={<Februar24 />} />
            <Route path='interview' element={<InterviewReport />} ></Route>
            <Route path='personal/:cid' element={<PersonalCard />} ></Route>
            
          </Routes>
            
    </div>
    </BrowserRouter>
  );
}

export default App;
