import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const StoreContext = createContext(null);

const StoreContextprovider = (Props) => {
  const [cartitems, setCartItems] = useState({});
  const [food_list, setFoodList] = useState([]);
  // jwt token
  const [token, setToken] = useState('');

  const getFoodList = async () => {
    const response = await axios.get('http://localhost:3000/api/food/list');
    setFoodList(response.data.data);
  };

  // when user add item first time in cart
  const addToCart = async (itemid) => {
    // create new entry
    if (!cartitems[itemid]) {
      setCartItems((prev) => ({ ...prev, [itemid]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    }
    // add cart data in backend
    if (token) {
      await axios.post(
        'http://localhost:3000/api/cart/add',
        { itemid },
        { headers: { token } }
      );
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

  // to prevent datalost on reload
  useEffect(() => {
    const loadListData = async () => {
      await getFoodList();
      if (localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'));
      }
    };
    loadListData();
  }, []);

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
