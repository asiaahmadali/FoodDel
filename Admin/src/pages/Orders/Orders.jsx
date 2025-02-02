import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assests/assets';

function Orders() {
  const [orders, setOrders] = useState([]);
  const backendURL = 'http://localhost:3000';

  const getAllOrders = async () => {
    const response = await axios.get(`${backendURL}/api/order/listorders`);
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error('error');
    }
  };

  // statusUpdationHandler

  const statusUpdationHandler = async (e, orderId) => {
    const response = await axios.post(`${backendURL}/api/order/updatestatus`, {
      orderId,
      status: e.target.value,
    });

    if (response.data.success) {
      await getAllOrders();
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);
  return (
    <div className="font-outfit">
      <h1 className="text-2xl font-bold m-[15px]">Orders Page</h1>
      <div className="w-[65vw]">
        {orders.map((order, orderindex) => {
          return (
            <div
              className="flex gap-[10px] justify-between items-start p-[16px] text-[#505050] border-[1px] border-orange-500 m-[20px]"
              key={orderindex}
            >
              <img src={assets.parcel_icon} alt="" />
              <div>
                <p className="font-bold">
                  {order.items.map((item, itemindex) => {
                    if (itemindex === order.items.length - 1) {
                      return `${item.name} x ${item.quantity}`;
                    } else {
                      return `${item.name} x ${item.quantity} ,`;
                    }
                  })}
                </p>

                {/* order name */}
                <p className="font-bold">
                  {order.address.firstName + ', ' + order.address.lastName}
                </p>
                <div className="mt-[25px] mb-[12px]">
                  <p>{order.address.street + ' ,'}</p>
                  <p>
                    {order.address.state +
                      ', ' +
                      order.address.city +
                      ', ' +
                      order.address.country +
                      ', ' +
                      order.address.zipcode}
                  </p>
                </div>

                <p>{order.address.phone}</p>
              </div>
              <p>Items:{order.items.length}</p>
              <p>${order.amount}:00</p>

              {/* select order status */}
              <select
                onChange={(e) => statusUpdationHandler(e, order._id)}
                value={order.status}
                className="bg-orange-200 border-[1px] border-orange-[500] w-[150px] p-[10px] outline-none"
              >
                <option value="Food Processing">Food Processing</option>
                <option value="Out For Delivery">Out For Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Orders;
