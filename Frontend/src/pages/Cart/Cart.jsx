import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

function Cart() {
  const { food_list, cartitems, removeFromCart } = useContext(StoreContext);
  return (
    <div>
      {/* cart items */}
      <div>
        {/* items title */}
        <div>
          <p>Items</p>
          <p>Title</p>
          <p>Quantity</p>
          <p>Price</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list.map((item, index) => {
          if (cartitems[item._id] > 0) {
            return (
              <div key={index}>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartitems[item._id]}</p>
                <p>{item.price * cartitems[item._id]}</p>
                <p>x</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Cart;
