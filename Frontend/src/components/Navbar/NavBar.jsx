import { useState } from 'react';
import { assets } from '../../assets/assets';

function NavBar() {
  const [menu, setMenu] = useState('home');
  return (
    <div className="flex justify-between bg-gray-100 p-[20px]">
      <img src={assets.logo} alt="" />
      <ul className="flex gap-4 font-outfit cursor-pointer">
        <li
          className={menu === 'home' ? 'active' : ''}
          onClick={() => setMenu('home')}
        >
          Home
        </li>
        <li
          className={menu === 'menu' ? 'active' : ''}
          onClick={() => setMenu('menu')}
        >
          Menu
        </li>
        <li
          className={menu === 'mobileapp' ? 'active' : ''}
          onClick={() => setMenu('mobileapp')}
        >
          Mobile App
        </li>
        <li
          className={menu === 'contactus' ? 'active' : ''}
          onClick={() => setMenu('contactus')}
        >
          Contact Us
        </li>
      </ul>
      {/* right part of navbar */}
      <div className="flex gap-2">
        <img src={assets.search_icon} alt="" />
        <div className="relative ">
          <img src={assets.bag_icon} alt="" />
          <div className="absolute top-[-4px] right-[-4px] min-w-[10px] rounded-[5px] bg-red-600  min-h-[10px]"></div>
        </div>
        {/* sign in */}
        <div>
          <button className="bg-blue-500 p-2 transition-all duration-300 ease-in-out hover:bg-blue-700  text-white rounded-md">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
