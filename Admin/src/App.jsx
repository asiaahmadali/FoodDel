import NavBar from './components/NavBar/NavBar';
import SideBar from './components/sideBar/sidebar';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import AddProduct from './pages/AddProduct/AddProduct';
import Orders from './pages/Orders/Orders';
import ListProducts from './pages/ListProducts/ListProducts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
    });
  }, []);
  return (
    <div>
      <ToastContainer />
      <NavBar />
      <hr />

      <div className="flex">
        <SideBar />
        <Routes>
          <Route path="/addProducts" element={<AddProduct />} />
          <Route path="/listProducts" element={<ListProducts />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
