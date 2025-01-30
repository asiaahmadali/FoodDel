import { assets } from '../../assests/assets';

function SideBar() {
  return (
    <div className="flex flex-col gap-[15px] font-outfit p-[90px] border-[1px] border-[#a9a9a9] border-top-0 min-h-[100vh] w-[20%]">
      <div>
        <img src={assets.add_icon} alt="" />
        <p>Add Items</p>
      </div>

      <div>
        <img src={assets.order_icon} alt="" />
        <p>List Items</p>
      </div>

      <div>
        <img src={assets.order_icon} alt="" />
        <p>Orders</p>
      </div>
    </div>
  );
}

export default SideBar;
