import { menu_list } from '../../assets/assets';
function ExploreMenu() {
  return (
    <div>
      <h1>Explore menu</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
        accusantium?
      </p>
      {/* menu list */}
      <div className="flex gap-2">
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
