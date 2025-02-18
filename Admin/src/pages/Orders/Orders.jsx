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
    <div className="font-outfit p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Orders Page</h1>
      <div className="overflow-x-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {orders.map((order, orderindex) => (
            <div
              className="flex flex-col gap-4 justify-between items-start p-4 bg-white border border-orange-500 rounded-lg shadow-lg"
              key={orderindex}
              data-aos="zoom-in"
            >
              <img
                src={assets.parcel_icon}
                alt="parcel"
                className="w-16 h-16 mx-auto"
              />
              <div className="flex flex-col gap-2">
                <p className="font-bold text-sm">
                  {order.items.map((item, itemindex) => {
                    if (itemindex === order.items.length - 1) {
                      return `${item.name} x ${item.quantity}`;
                    } else {
                      return `${item.name} x ${item.quantity},`;
                    }
                  })}
                </p>

                {/* order name */}
                <p className="font-bold text-sm">
                  {order.address.firstName + ', ' + order.address.lastName}
                </p>

                {/* Address */}
                <div className="mt-4 text-xs">
                  <p>{order.address.street}</p>
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

                <p className="text-xs">{order.address.phone}</p>
              </div>

              <div className="flex justify-between w-full mt-4 text-sm">
                <p>Items: {order.items.length}</p>
                <p>${order.amount}:00</p>
              </div>

              {/* Status dropdown */}
              <select
                onChange={(e) => statusUpdationHandler(e, order._id)}
                value={order.status}
                className="bg-orange-200 border border-orange-500 w-full md:w-auto p-2 text-sm rounded-md mt-4"
              >
                <option value="Food Processing">Food Processing</option>
                <option value="Out For Delivery">Out For Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
