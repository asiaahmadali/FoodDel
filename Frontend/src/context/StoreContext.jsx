import { createContext, useState } from 'react';
import { food_list } from '../assets/assets';
export const StoreContext = createContext(null);

const StoreContextprovider = (Props) => {
  const [cartitems, setCartItems] = useState({});

  // when user add item first time in cart
  const addToCart = (itemid) => {
    // create new entry
    if (!cartitems[itemid]) {
      setCartItems((prev) => ({ ...prev, [itemid]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    }
  };

  // remove from cart

  const removeFromCart = (itemid) => {
    setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };

  const totalpriceofCart = () => {
    let totalAmount = 0;

    // beacuse cartitems is object that why used forin loop
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        const iteminfo = food_list.find(
          (productitem) => productitem._id === item
        );
        totalAmount = totalAmount + iteminfo.price * cartitems[item];
      }
    }
    return totalAmount;
  };

  // jwt token
  const [token, setToken] = useState('');

  const contextValue = {
    food_list,
    cartitems,
    setCartItems,
    addToCart,
    removeFromCart,
    totalpriceofCart,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {Props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextprovider;
