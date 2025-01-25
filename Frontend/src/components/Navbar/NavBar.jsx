import { assets } from '../../assets/assets';
function NavBar() {
  return (
    <div className="flex justify-between bg-gray-100 p-[20px]">
      <img src={assets.logo} alt="" />
      <ul className="flex gap-4">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile App</li>
        <li>Contact Us</li>
      </ul>
      <div>
        <img src={assets.search_icon} alt="" />
        <div></div>
      </div>
    </div>
  );
}

export default NavBar;
