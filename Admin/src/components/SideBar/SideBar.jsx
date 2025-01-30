import { assets } from '../../assests/assets';

function SideBar() {
  return (
    <div className="flex flex-col gap-[15px] font-outfit p-[60px] border-[1px] border-[#a9a9a9] border-top-0 min-h-[100vh] w-[20%]">
      <div className="flex items-center gap-[13px] border-[1px] border-[#a9a9a9] cursor-pointer rounded-sm w-full p-[10px]">
        <img src={assets.add_icon} alt="" className="w-[25px] h-[25px]" />
        <p className="hidden md:block">Add Items</p>
      </div>

      <div className="flex items-center gap-[13px] border-[1px] border-[#a9a9a9] cursor-pointer rounded-sm w-full p-[10px]">
        <img src={assets.order_icon} alt="" className="w-[25px] h-[25px]" />
        <p className="hidden md:block">List Items</p>
      </div>

      <div className="flex items-center gap-[13px] border-[1px] border-[#a9a9a9] cursor-pointer rounded-sm w-full p-[10px]">
        <img src={assets.order_icon} alt="" className="w-[25px] h-[25px]" />
        <p className="hidden md:block">Orders</p>
      </div>
    </div>
  );
}

export default SideBar;
