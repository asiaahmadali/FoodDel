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

  // Save cartitems to localStorage whenever cart changes
  useEffect(() => {
    if (cartitems && Object.keys(cartitems).length > 0) {
      localStorage.setItem('cartitems', JSON.stringify(cartitems));
    }
  }, [cartitems]);

  // when user add item first time in cart
  const addToCart = async (itemid) => {
    if (!cartitems[itemid]) {
      console.log('Adding item to cart with ID:', itemid); // Check the item ID
      setCartItems((prev) => ({ ...prev, [itemid]: 1 }));
    } else {
      console.log('Updating cart item count for ID:', itemid); // Check the item ID
      setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    }

    if (token) {
      try {
        const dataToSend = { itemid };
        console.log('Sending data to backend:', dataToSend); // Log the payload
        const response = await axios.post(
          'http://localhost:3000/api/cart/add',
          dataToSend,
          { headers: { token } }
        );
        console.log('Response:', response); // Log the response
      } catch (error) {
        console.error('Error adding item to cart:', error);
      }
    }
  };

  // prevent loading cart data
  const getCartData = async (token) => {
    const response = await axios.post(
      'http://localhost:3000/api/cart/getcart',
      {},
      { headers: { token } }
    );
    setCartItems(response.data.cartData);
  };

  // remove from cart
  const removeFromCart = (itemid) => {
    setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };

  const totalpriceofCart = () => {
    let totalAmount = 0;

    // because cartitems is an object, that's why used for-in loop
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

  // to prevent data loss on reload
  useEffect(() => {
    const loadListData = async () => {
      await getFoodList();

      // Load cart data from localStorage on page reload
      const storedCartItems = localStorage.getItem('cartitems');
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }

      if (localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'));
        await getCartData(localStorage.getItem('token'));
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
