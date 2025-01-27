import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
function FoodDisplay(Props) {
  const { food_list } = useContext(StoreContext);
  return (
    <div>
      <div>
        <h1 className="text-2xl font-outfit font-bold my-[20px]">
          Top Dishes near you
        </h1>
        {/* food list */}
        <div className="grid grid-cols-auto-fill">
          {food_list.map((fooditem, index) => {
            return <FoodItem key={index} fooditem={fooditem} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default FoodDisplay;
