import NavBar from './components/Navbar/NavBar';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
