import { assets } from '../../assets/assets';

function FoodItem(Props) {
  return (
    <div className="rounded-[14px] m-auto shadow-custom">
      {/* food item image */}
      <div>
        <img src={Props.fooditem.image} alt="" className="rounded-t-md " />
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
