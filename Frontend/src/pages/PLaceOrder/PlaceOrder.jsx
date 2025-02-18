import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

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
    let orderData = {
      address: data,
      items: orderItems,
      amount: totalpriceofCart() + 10,
    };
    let response = await axios.post(`${url}/api/order/placeorder`, orderData, {
      headers: { token },
    });
    console.log(response);
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert('error');
    }
  };

  useEffect(() => {
    if (!token) {
      navigate('/cart');
    } else if (totalpriceofCart() === 0) {
      navigate('/cart');
    }
  }, [token]);

  return (
    <form
      className="flex flex-col lg:flex-row justify-between font-outfit m-[20px] lg:m-[100px] gap-[20px]"
      onSubmit={placeorder}
    >
      {/* Left part */}
      <div
        className="flex flex-col gap-[15px] w-full lg:w-1/2"
        data-aos="zoom-in"
      >
        <h1 className="text-2xl font-bold mb-[20px] text-gray-800">
          Delivery Information
        </h1>

        <div className="flex flex-wrap gap-2">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            required
            onChange={changeHandler}
            value={data.firstName}
            className="focus:outline-none border-[1px] border-gray-400 p-[10px] rounded-md w-full sm:w-[49%]"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            required
            onChange={changeHandler}
            value={data.lastName}
            className="focus:outline-none border-[1px] border-gray-400 p-[10px] rounded-md w-full sm:w-[49%]"
          />
        </div>

        <input
          type="email"
          required
          placeholder="Email"
          name="email"
          onChange={changeHandler}
          value={data.email}
          className="focus:outline-none w-full border-[1px] border-gray-400 p-[10px] rounded-md "
        />

        <input
          type="text"
          placeholder="Street"
          name="street"
          required
          onChange={changeHandler}
          value={data.street}
          className="focus:outline-none w-full border-[1px] border-gray-400 p-[10px] rounded-md "
        />

        <div className="flex flex-wrap gap-2">
          <input
            type="text"
            required
            placeholder="City"
            name="city"
            onChange={changeHandler}
            value={data.city}
            className="focus:outline-none border-[1px] border-gray-400 p-[10px] rounded-md w-full sm:w-[49%]"
          />
          <input
            type="text"
            placeholder="State"
            name="state"
            required
            onChange={changeHandler}
            value={data.state}
            className="focus:outline-none border-[1px] border-gray-400 p-[10px] rounded-md w-full sm:w-[49%]"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <input
            type="text"
            placeholder="ZipCode"
            name="zipcode"
            required
            onChange={changeHandler}
            value={data.zipcode}
            className="focus:outline-none border-[1px] border-gray-400 p-[10px] rounded-md w-full sm:w-[49%]"
          />
          <input
            type="text"
            placeholder="Country"
            name="country"
            required
            onChange={changeHandler}
            value={data.country}
            className="focus:outline-none border-[1px] border-gray-400 p-[10px] rounded-md w-full sm:w-[49%]"
          />
        </div>

        <input
          type="text"
          placeholder="Phone"
          name="phone"
          required
          onChange={changeHandler}
          value={data.phone}
          className="focus:outline-none border-[1px] border-gray-400 p-[10px] rounded-md "
        />
      </div>

      {/* Right part */}
      <div
        className="w-full lg:w-1/3 bg-white p-[20px] rounded-lg shadow-md"
        data-aos="flip-left"
      >
        <h1 className="text-xl font-bold mb-[10px] text-gray-800">
          Cart Total
        </h1>
        <div>
          {/* Subtotal */}
          <div className="flex justify-between items-center mb-[10px]">
            <p className="text-gray-600">Subtotal</p>
            <p className="text-gray-800">${totalpriceofCart()}</p>
          </div>
          <hr className="my-[5px]" />

          {/* Delivery Fee */}
          <div className="flex justify-between items-center mb-[10px]">
            <p className="text-gray-600">Delivery Fee</p>
            <p className="text-gray-800">
              ${totalpriceofCart() === 0 ? 0 : 10}
            </p>
          </div>
          <hr className="my-[5px]" />

          {/* Total */}
          <div className="flex justify-between items-center mb-[20px]">
            <p className="text-gray-600">Total</p>
            <p className="text-gray-800">
              ${totalpriceofCart() === 0 ? 0 : totalpriceofCart() + 10}
            </p>
          </div>
        </div>

        {/* Proceed Button */}
        <button
          type="submit"
          className="w-full bg-red-500 text-white p-[12px] rounded-md hover:bg-red-600 transition-all duration-300 mt-[10px]"
        >
          Proceed to Payment
        </button>
      </div>
    </form>
  );
}

export default PlaceOrder;
