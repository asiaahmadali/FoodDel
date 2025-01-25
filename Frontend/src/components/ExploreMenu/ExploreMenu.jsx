import { menu_list } from '../../assets/assets';
function ExploreMenu() {
  return (
    <div className="mt-[30px] flex flex-col gap-[15px]">
      <h1 className="font-bold font-outfit text-2xl">Explore our menu</h1>
      <p className="w-[650px] font-outfit">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
        accusantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Eum, accusantium?
      </p>
      {/* menu list */}
      <div className="flex gap-10 mt-[10px] overflow-x-scroll no-scrollbar ">
        {menu_list.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center gap-3">
              <img src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExploreMenu;
