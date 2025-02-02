import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

function PlaceOrder() {
  const navigate = useNavigate();
  const { totalpriceofCart, token, food_list, cartitems } =
    useContext(StoreContext);
  const url = 'http://localhost:3000';

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  // submitHandler
  const placeorder = async (e) => {
    e.preventDefault();
    const orderItems = [];
    food_list.map((item) => {
      if (cartitems[item._id] > 0) {
        let itemInfo = item;
        itemInfo['quantity'] = cartitems[item._id];
        orderItems.push(itemInfo);
      }
    });
    console.log(orderItems);
  };
  return (
    <form
      className="flex justify-between font-outfit m-[100px]"
      onSubmit={placeorder}
    >
      {/* left part */}
      <div className="flex flex-col gap-[15px]">
        <h1 className="text-2xl font-bold mb-[20px]">Delivery Information</h1>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={changeHandler}
            value={data.firstName}
            className="focus:outline-none border-[1px] border-gray-400 p-[8px] rounded-md "
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={changeHandler}
            value={data.lastName}
            className="focus:outline-none border-[1px] border-gray-400 p-[8px] rounded-md "
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={changeHandler}
          value={data.email}
          className="focus:outline-none w-full border-[1px] border-gray-400 p-[8px] rounded-md "
        />
        <input
          type="text"
          placeholder="Street"
          name="street"
          onChange={changeHandler}
          value={data.street}
          className="focus:outline-none w-full border-[1px] border-gray-400 p-[8px] rounded-md "
        />

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="City"
            name="city"
            onChange={changeHandler}
            value={data.city}
            className="focus:outline-none border-[1px] border-gray-400 p-[8px] rounded-md "
          />
          <input
            type="text"
            placeholder="State"
            name="state"
            onChange={changeHandler}
            value={data.state}
            className="focus:outline-none border-[1px] border-gray-400 p-[8px] rounded-md "
          />
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="ZipCode"
            name="zipcode"
            onChange={changeHandler}
            value={data.zipcode}
            className="focus:outline-none border-[1px] border-gray-400 p-[8px] rounded-md "
          />
          <input
            type="text"
            placeholder="Country"
            name="country"
            onChange={changeHandler}
            value={data.country}
            className="focus:outline-none border-[1px] border-gray-400 p-[8px] rounded-md "
          />
        </div>
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          onChange={changeHandler}
          value={data.phone}
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
            <p>${totalpriceofCart() === 0 ? 0 : 10}</p>
            <p>${10}</p>
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
          onClick={() => navigate('/placeorder')}
          type="submit"
          className="bg-orange-500 p-[10px] my-[10px] text-white rounded-sm"
        >
          Proceed to checkout
        </button>
      </div>
    </form>
  );
}

export default PlaceOrder;
