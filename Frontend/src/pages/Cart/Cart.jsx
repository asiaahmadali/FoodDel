import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { food_list, cartitems, removeFromCart, totalpriceofCart } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="m-[20px] md:m-[50px] lg:m-[120px] font-outfit">
      {/* cart items */}
      <div className="flex flex-col">
        {food_list.map((item, index) => {
          if (cartitems[item._id] > 0) {
            return (
              <>
                {/* Item details */}
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-6 gap-4 place-items-center mb-[20px] sm:mb-[40px]"
                  data-aos="fade-left"
                >
                  {/* Item Name */}
                  <div className="sm:col-span-1">
                    <p className="font-medium text-lg">{item.name}</p>
                  </div>

                  {/* Item Image on small screens below item name */}
                  <div className="sm:col-span-1 flex  sm:mb-0 mb-[10px]">
                    <img
                      src={'http://localhost:3000/images/' + item.image}
                      alt={item.name}
                      className="w-[100px] h-[70px]"
                    />
                  </div>

                  {/* Quantity */}
                  <div className="sm:col-span-1">
                    <p className="text-gray-600">
                      Quantity: {cartitems[item._id]}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="sm:col-span-1">
                    <p className="text-gray-600">Price:{'$' + item.price}</p>
                  </div>

                  {/* Total */}
                  <div className="sm:col-span-1">
                    <p className="text-gray-600">
                      Total:{'$' + item.price * cartitems[item._id]}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <div className="sm:col-span-1">
                    <p
                      className="cursor-pointer font-bold text-red-500"
                      onClick={() => removeFromCart(item._id)}
                    >
                      x
                    </p>
                  </div>
                </div>
                <hr className="my-[5px]" />
              </>
            );
          }
        })}
      </div>

      {/* cart total  */}
      <div className="flex flex-col lg:flex-row justify-between mt-[50px] gap-[30px]">
        {/* total amount */}
        <div className="w-full lg:w-1/2 " data-aos="zoom-in">
          <h1 className="text-2xl font-bold mb-[10px] text-gray-800">
            Cart Total
          </h1>
          <div>
            {/* total */}
            <div className="flex justify-between items-center">
              <p>Subtotal </p>
              <p>${totalpriceofCart()}</p>
            </div>

            <hr className="my-[5px]" />

            {/* delivery fee */}
            <div className="flex justify-between items-center">
              <p>Delivery Fee </p>
              <p>${totalpriceofCart() === 0 ? 0 : 10}</p>
            </div>

            <hr className="my-[5px]" />

            {/* with delivery charges */}
            <div className="flex justify-between items-center">
              <p>Total</p>
              <p>${totalpriceofCart() === 0 ? 0 : totalpriceofCart() + 10}</p>
            </div>
          </div>
          {/* proceed btn */}
          <button
            onClick={() => {
              console.log('Navigating to /placeorder'); // Debugging log
              navigate('/placeorder');
            }}
            data-aos="zoom-in"
            className="w-full mt-[20px] py-[12px] bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-300"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
