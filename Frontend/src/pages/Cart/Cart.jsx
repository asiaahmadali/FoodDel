import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { food_list, cartitems, removeFromCart, totalpriceofCart } =
    useContext(StoreContext);
  const navigate = useNavigate();
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

      {/* cart total and promo code */}
      <div className="flex justify-between  mt-[100px]">
        {/* total amount */}
        <div className="w-1/2">
          <h1 className="text-xl font-bold mb-[10px]">Carts Total</h1>
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
              <p>${10}</p>
            </div>

            <hr className="my-[5px]" />

            {/* with delivery charges */}
            <div className="flex justify-between items-center">
              <p>Total</p>
              <p>${totalpriceofCart() + 10}</p>
            </div>
          </div>
          {/* proceed btn */}
          <button
            onClick={() => navigate('/placeorder')}
            className="bg-orange-500 p-[10px] my-[10px] text-white rounded-sm"
          >
            Proceed to checkout
          </button>
        </div>
        {/* promo code */}
        <div className="flex flex-col gap-[10px]">
          <p>If you have a promo code , enter it please</p>
          <div className="rounded-sm ">
            <input
              type="text"
              className="outline-none bg-gray-200  p-[10px] px-[30px]"
              placeholder="Enter promo code"
            />
            <button className="bg-black text-white p-[10px] px-[30px]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
