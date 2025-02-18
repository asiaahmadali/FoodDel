import { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { FaBars } from 'react-icons/fa';

function NavBar() {
  const [menu, setMenu] = useState('home');
  const { totalpriceofCart, token, setToken } = useContext(StoreContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // logout
  const logOut = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/');
  };

  return (
    <div className="md:px-[100px] px-[20px] py-[20px] bg-gray-100 overflow-hidden">
      <div className="flex justify-between items-center max-w-full">
        <Link to="/">
          <h1
            data-aos="flip-left"
            className="text-red-600  font-bold  md:text-4xl text-3xl"
          >
            QuickBite
          </h1>
        </Link>

        {/* Menu for desktop */}
        <ul className="hidden md:flex gap-8 font-outfit cursor-pointer">
          <Link
            to="/"
            className={menu === 'home' ? 'active' : ''}
            onClick={() => setMenu('home')}
          >
            Home
          </Link>
          <a
            href="#menu"
            className={menu === 'menu' ? 'active' : ''}
            onClick={() => setMenu('menu')}
          >
            Menu
          </a>
          <a
            href="#mobile-app"
            className={menu === 'mobileapp' ? 'active' : ''}
            onClick={() => setMenu('mobileapp')}
          >
            Mobile App
          </a>
          <a
            href="#contact-us"
            className={menu === 'contactus' ? 'active' : ''}
            onClick={() => setMenu('contactus')}
          >
            Contact Us
          </a>
        </ul>

        {/* Right part of navbar (for cart and sign in) */}
        <div className="flex gap-3 md:gap-8 items-center">
          <div className="relative">
            <Link to="/cart">
              <img
                src={assets.basket_icon}
                alt=""
                className="w-[22px] md:w-[30px]"
              />
            </Link>
            <div
              className={
                totalpriceofCart() === 0
                  ? ''
                  : 'absolute top-[-4px] right-[-4px] min-w-[10px] rounded-[5px] bg-red-600 min-h-[10px]'
              }
            ></div>
          </div>

          {/* Sign in or profile */}
          <div className="hidden md:block">
            {!token ? (
              <button className="bg-red-600 font-outfit px-3 py-2 transition-all duration-300 ease-in-out hover:bg-red-700 text-white rounded-md">
                <Link to="/signup" className="hover:text-white">
                  Sign in
                </Link>
              </button>
            ) : (
              <div className="absolute lg:top-6 custom-hover  cursor-pointer">
                <img src={assets.profile_icon} alt="" />
                <ul className="absolute hidden right-0 custom-dropdown z-1">
                  <li
                    className="flex gap-[8px] cursor-pointer items-center"
                    onClick={() => navigate('/myorders')}
                  >
                    <img src={assets.bag_icon} alt="" className="w-[20px]" />
                    <p className="cursor-pointer hover:text-red-500">Orders</p>
                  </li>
                  <hr />
                  <li className="flex gap-[8px] cursor-pointer items-center">
                    <img src={assets.logout_icon} alt="" className="w-[20px]" />
                    <p
                      className="cursor-pointer hover:text-red-500"
                      onClick={logOut}
                    >
                      LogOut
                    </p>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Mobile menu icon */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 w-full bg-white shadow-lg p-4 max-w-full">
          <ul className="flex flex-col items-center gap-4">
            <Link
              to="/"
              className={menu === 'home' ? 'active' : ''}
              onClick={() => {
                setMenu('home');
                setIsMobileMenuOpen(false);
              }}
            >
              Home
            </Link>
            <a
              href="#menu"
              className={menu === 'menu' ? 'active' : ''}
              onClick={() => {
                setMenu('menu');
                setIsMobileMenuOpen(false);
              }}
            >
              Menu
            </a>
            <a
              href="#mobile-app"
              className={menu === 'mobileapp' ? 'active' : ''}
              onClick={() => {
                setMenu('mobileapp');
                setIsMobileMenuOpen(false);
              }}
            >
              Mobile App
            </a>
            <a
              href="#contact-us"
              className={menu === 'contactus' ? 'active' : ''}
              onClick={() => {
                setMenu('contactus');
                setIsMobileMenuOpen(false);
              }}
            >
              Contact Us
            </a>
            {!token ? (
              <Link
                to="/signup"
                className="bg-red-500 font-outfit px-3 py-2 transition-all duration-300 ease-in-out hover:bg-red-700 text-white rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign in
              </Link>
            ) : (
              <div
                className="flex gap-4 items-center cursor-pointer"
                onClick={logOut}
              >
                <img src={assets.logout_icon} alt="" className="w-[20px]" />
                <p className="cursor-pointer hover:text-red-500">LogOut</p>
              </div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
