import { menu_list } from '../../assets/assets';
function ExploreMenu(Props) {
  return (
    <div className="mt-[30px] flex flex-col gap-[15px]">
      <h1 className="font-bold font-outfit text-2xl">Explore our menu</h1>
      <p className="w-full sm:w-[650px] font-outfit">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
        accusantium? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Eum, accusantium?
      </p>

      {/* menu list */}
      <div className="flex gap-10   mt-[10px] overflow-x-scroll hide-scrollbar ">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() =>
                Props.setCategory((prev) =>
                  prev === item.menu_name ? 'All' : item.menu_name
                )
              }
              className="flex flex-col items-center gap-3"
            >
              <img
                src={item.menu_image}
                alt=""
                className={
                  Props.category === item.menu_name
                    ? 'activecategory min-w-[80px] cursor-pointer w-[7.5vw] rounded-[50%]'
                    : 'min-w-[80px] cursor-pointer w-[7.5vw] rounded-[50%]'
                }
              />
              <p className="font-outfit text-[#747474] text-[16px] font-[600]  cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      {/* hr line */}
      <hr className="mt-[10px] mb-[10px] bg-gray-400 h-[2px] border-none" />
    </div>
  );
}

export default ExploreMenu;
