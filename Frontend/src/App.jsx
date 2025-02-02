import NavBar from './components/Navbar/NavBar';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Verify from './pages/verifyOrder/verify';
import MyOrders from './pages/MyOrders/MyOrders';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="myorders" element={<MyOrders />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
