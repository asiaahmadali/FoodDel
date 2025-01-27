import { createContext, useEffect, useState } from 'react';
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

  const contextValue = {
    food_list,
    cartitems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  useEffect(() => {
    console.log(cartitems);
  }, [cartitems]);
  return (
    <StoreContext.Provider value={contextValue}>
      {Props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextprovider;
