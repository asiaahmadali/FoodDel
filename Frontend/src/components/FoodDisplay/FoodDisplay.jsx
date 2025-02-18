import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

function FoodDisplay(Props) {
  const { food_list } = useContext(StoreContext);
  return (
    <div id="menu">
      <div>
        <h1 className="text-2xl font-outfit font-bold my-[20px]">
          Top Dishes near you
        </h1>
        {/* food list */}
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {food_list.map((fooditem, index) => {
            if (
              Props.category === 'All' ||
              Props.category === fooditem.category
            ) {
              return <FoodItem key={index} fooditem={fooditem} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default FoodDisplay;
