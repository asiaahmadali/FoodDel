import { useState } from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

function NavBar() {
  const [menu, setMenu] = useState('home');
  return (
    <div className="p-[20px] bg-gray-100 ">
      <div className="flex justify-between pl-[100px] pr-[100px]">
        <img src={assets.logo} alt="" />
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
            <img src={assets.bag_icon} alt="" />
            <div className="absolute top-[-4px] right-[-4px] min-w-[10px] rounded-[5px] bg-red-600  min-h-[10px]"></div>
          </div>
          {/* sign in */}
          <div>
            <button className="bg-blue-500 font-outfit px-3 py-2 transition-all duration-300 ease-in-out hover:bg-blue-700  text-white rounded-md">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
