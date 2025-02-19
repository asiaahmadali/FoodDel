import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextprovider = (Props) => {
  const [cartitems, setCartItems] = useState({});
  const [food_list, setFoodList] = useState([]);
  // jwt token
  const [token, setToken] = useState('');
  const backendURL = 'http://quick-bite-navy.vercel.app';

  // when user add item first time in cart
  const addToCart = async (itemid) => {
    if (!cartitems[itemid]) {
      setCartItems((prev) => ({ ...prev, [itemid]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    }

    if (token) {
      await axios.post(
        `${backendURL}/api/cart/add`,
        { itemid },
        { headers: { token } }
      );
    }
  };

  // remove from cart
  const removeFromCart = async (itemid) => {
    setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
    if (token) {
      await axios.post(
        `${backendURL}/api/cart/delete`,
        { itemid },
        { headers: { token } }
      );
    }
  };

  const totalpriceofCart = () => {
    let totalAmount = 0;

    // because cartitems is an object, that's why used for-in loop
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        const iteminfo = food_list.find(
          (productitem) => productitem._id === item
        );

        totalAmount += iteminfo.price * cartitems[item];
      }
    }
    return totalAmount;
  };

  // fetch food list
  const getFoodList = async () => {
    const response = await axios.get(`${backendURL}/api/food/list`);
    setFoodList(response.data.data);
  };

  // prevent loading cart data
  const loadCartData = async (token) => {
    const response = await axios.post(
      `${backendURL}/api/cart/getcart`,
      {},
      { headers: { token } }
    );
    setCartItems(response.data.cartData);
  };

  // to prevent data loss on reload
  useEffect(() => {
    const loadData = async () => {
      await getFoodList();

      if (localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'));
        await loadCartData(localStorage.getItem('token'));
      }
    };
    loadData();
  }, []);

  // .......
  // Save cartitems to localStorage whenever cart changes
  useEffect(() => {
    if (cartitems && Object.keys(cartitems).length > 0) {
      localStorage.setItem('cartitems', JSON.stringify(cartitems));
    }
  }, [cartitems]);

  const contextValue = {
    food_list,
    cartitems,
    setCartItems,
    addToCart,
    removeFromCart,
    totalpriceofCart,
    token,
    setToken,
    backendURL,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {Props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextprovider;
