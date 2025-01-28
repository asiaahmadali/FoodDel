import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

function Cart() {
  const { food_list, cartitems, removeFromCart } = useContext(StoreContext);
  return (
    <div className="m-[120px] font-outfit">
      {/* cart items */}
      <div className="flex flex-col">
        {/* items title */}
        <div className="grid grid-cols-6 gap-4 mb-[10px] items-center">
          <p>Item</p>
          <p>Title</p>
          <p>Quantity</p>
          <p>Price</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className="mb-[10px] h-[2px]" />
        {food_list.map((item, index) => {
          if (cartitems[item._id] > 0) {
            return (
              <>
                <div
                  key={index}
                  className="grid grid-cols-6 gap-4 items-center mb-[20px]"
                >
                  <div className="flex justify-start">
                    <img src={item.image} alt="" className="w-[80px]" />
                  </div>

                  <p>{item.name}</p>

                  <p>{cartitems[item._id]}</p>

                  <p>{'$' + item.price}</p>

                  <p>{'$' + item.price * cartitems[item._id]}</p>

                  <p
                    className="cursor-pointer font-bold"
                    onClick={() => removeFromCart(item._id)}
                  >
                    x
                  </p>
                </div>
                <hr className="my-[5px] " />
              </>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Cart;
