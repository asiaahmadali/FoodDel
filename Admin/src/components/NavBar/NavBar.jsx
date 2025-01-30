import { assets } from '../../assests/assets';
function NavBar() {
  return (
    <div className="flex justify-between px-[20px] py-[10px] items-center">
      <img src={assets.logo} alt="" className="w-[150px]" />
      <img src={assets.profile_image} alt="" className="w-[60px] h-[60px]" />
    </div>
  );
}

export default NavBar;
