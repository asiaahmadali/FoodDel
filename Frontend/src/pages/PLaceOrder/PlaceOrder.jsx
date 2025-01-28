import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

function PlaceOrder() {
  const navigate = useNavigate();
  const { totalpriceofCart } = useContext(StoreContext);
  return (
    <form className="flex justify-between font-outfit m-[100px]">
      {/* left part */}
      <div className="flex flex-col gap-[15px]">
        <h1 className="text-2xl font-bold mb-[20px]">Delivery Information</h1>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="First Name"
            className="focus:outline-none border-[1px] border-gray-400 p-[8px] rounded-md "
          />
          <input
            type="text"
            placeholder="Last Name"
            className="focus:outline-none border-[1px] border-gray-400 p-[8px] rounded-md "
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="focus:outline-none w-full border-[1px] border-gray-400 p-[8px] rounded-md "
        />
        <input
          type="text"
          placeholder="Street"
          className="focus:outline-none w-full border-[1px] border-gray-400 p-[8px] rounded-md "
        />

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="City"
            className="focus:outline-none border-[1px] border-gray-400 p-[8px] rounded-md "
          />
          <input
            type="text"
            placeholder="State"
            className="focus:outline-none border-[1px] border-gray-400 p-[8px] rounded-md "
          />
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="ZipCode"
            className="focus:outline-none border-[1px] border-gray-400 p-[8px] rounded-md "
          />
          <input
            type="text"
            placeholder="Country"
            className="focus:outline-none border-[1px] border-gray-400 p-[8px] rounded-md "
          />
        </div>
        <input
          type="text"
          placeholder="Phone"
          className="focus:outline-none border-[1px] border-gray-400 p-[8px] rounded-md "
        />
      </div>

      {/* right part */}

      <div className="w-1/3">
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
    </form>
  );
}

export default PlaceOrder;
