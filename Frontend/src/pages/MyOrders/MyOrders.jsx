import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

function MyOrders() {
  const [data, setData] = useState([]);
  const url = 'http://localhost:3000';
  const { token } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(
      `${url}/api/order/userorders`,
      {},
      { headers: { token } }
    );
    setData(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);
  return (
    <div className="font-outfit lg:my-[60px] lg:mx-[90px] m-[15px]">
      <h1 className="text-2xl font-bold">My Orders</h1>
      <div className="flex flex-col items-center mt-[20px] gap-[20px] ">
        {data.map((order, orderindex) => {
          return (
            <div
              className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6 place-items-center text-[#454545] border-[1px]  border-orange-500 p-[20px] justify-between w-full"
              key={orderindex}
              data-aos="zoom-in"
            >
              <img src={assets.parcel_icon} alt="" className="w-[55px]" />
              <p>
                {order.items.map((item, itemindex) => {
                  if (itemindex === order.items.length - 1) {
                    return item.name + 'x' + item.quantity;
                  } else {
                    return item.name + 'x' + item.quantity + ',';
                  }
                })}
              </p>

              {/* amount */}
              <p>${order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <div className="flex gap-1">
                <p className="text-orange-500">&#x25cf;</p>
                <p>{order.status}</p>
              </div>
              <button
                onClick={fetchOrders}
                className="bg-orange-500 p-[10px] hover:bg-orange-700 cursor-pointer text-white rounded-md "
              >
                Track Order
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyOrders;
