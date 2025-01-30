import { useContext } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

function FoodItem(Props) {
  const { cartitems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="rounded-[14px] m-auto shadow-custom">
      {/* food item image */}
      <div className="relative">
        <img
          src={'http://localhost:3000/images/' + Props.fooditem.image}
          alt=""
          className="rounded-t-md "
        />
        {!cartitems[Props.fooditem._id] ? (
          <img
            src={assets.add_icon_white}
            onClick={() => addToCart(Props.fooditem._id)}
            className="w-[34px] cursor-pointer rounded-md absolute bottom-[10px] right-[10px]"
          />
        ) : (
          <div className="flex gap-2 items-center p-[8px] right-[10px] absolute rounded-full bottom-[10px] bg-white">
            <img
              src={assets.remove_icon_red}
              alt=""
              onClick={() => removeFromCart(Props.fooditem._id)}
              className="w-[28px]"
            />
            <p>{cartitems[Props.fooditem._id]}</p>
            <img
              src={assets.add_icon_green}
              alt=""
              className="w-[28px]"
              onClick={() => addToCart(Props.fooditem._id)}
            />
          </div>
        )}
      </div>
      {/* food items info */}
      <div className="p-[10px]">
        <div className="flex justify-between items-center my-[10px]">
          <p className="text-[16px] font-semibold font-outfit">
            {Props.fooditem.name}
          </p>
          <img src={assets.rating_stars} alt="" className="w-[65px]" />
        </div>
        {/* description */}
        <div>
          <p className="mt-[20px] text-[14px] font-outfit text-[#676767]">
            {Props.fooditem.description}
          </p>
        </div>
        {/* price */}
        <div>
          <p className="text-red-700 font-bold text-xl my-[10px]">
            {'$'}
            {Props.fooditem.price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
