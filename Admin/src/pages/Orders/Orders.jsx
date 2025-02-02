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

  useEffect(() => {
    getAllOrders();
  }, []);
  return (
    <div>
      <h1>orders page</h1>
      <div>
        {orders.map((order, orderindex) => {
          return (
            <div className="" key={orderindex}>
              <img src={assets.parcel_icon} alt="" />
              <div>
                <p>
                  {' '}
                  {order.items.map((item, itemindex) => {
                    if (itemindex === order.items.length - 1) {
                      return `${item.name} x ${item.quantity}`;
                    } else {
                      return `${item.name} x ${item.quantity} ,`;
                    }
                  })}
                </p>

                {/* order name */}
                <p>{order.address.firstName + ', ' + order.address.lastName}</p>
                <div>
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
              <select>
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
