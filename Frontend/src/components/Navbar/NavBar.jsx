import { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

function NavBar() {
  const [menu, setMenu] = useState('home');
  const { totalpriceofCart, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  // logout
  const logOut = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/');
  };
  return (
    <div className="p-[20px] bg-gray-100 ">
      <div className="flex justify-between pl-[100px] pr-[100px]">
        <Link to="/">
          <img src={assets.logo} alt="" />
        </Link>
        <ul className="flex gap-8 font-outfit cursor-pointer">
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
        {/* right part of navbar */}
        <div className="flex gap-8 items-center ">
          <img src={assets.search_icon} alt="" className="w-[25px] h-[25px]" />
          <div className="relative ">
            <Link to="/cart">
              <img src={assets.basket_icon} alt="" />
            </Link>
            <div
              className={
                totalpriceofCart() === 0
                  ? ''
                  : 'absolute top-[-4px] right-[-4px] min-w-[10px] rounded-[5px] bg-red-600  min-h-[10px]'
              }
            ></div>
          </div>
          {/* sign in */}
          <div>
            {!token ? (
              <button className="bg-blue-500 font-outfit px-3 py-2 transition-all duration-300 ease-in-out hover:bg-blue-700  text-white rounded-md">
                <Link to="/signup" className="hover:text-white">
                  {' '}
                  Sign in
                </Link>
              </button>
            ) : (
              <div className="relative custom-hover cursor-pointer">
                <img src={assets.profile_icon} alt="" />
                <ul
                  className="absolute hidden right-0 custom-dropdown
                 z-1"
                >
                  <li className="flex gap-[8px] cursor-pointer items-center ">
                    <img src={assets.bag_icon} alt="" className="w-[20px]" />
                    <p className="cursor-pointer hover:text-orange-400">
                      Orders
                    </p>
                  </li>

                  <hr />
                  <li className="flex gap-[8px] cursor-pointer items-center ">
                    <img src={assets.logout_icon} alt="" className="w-[20px]" />
                    <p
                      className="cursor-pointer hover:text-orange-400"
                      onClick={logOut}
                    >
                      LogOut
                    </p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
