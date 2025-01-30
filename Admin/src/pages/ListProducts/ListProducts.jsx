import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function ListProducts() {
  const [list, setList] = useState([]);
  const url = 'http://localhost:3000';

  // getlist api
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error('Data not found');
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <div className="flex flex-col p-[20px] font-outfit">
        <h1 className="text-2xl font-bold mb-[20px]">All Food List</h1>
        {/* items title */}
        <div className="grid grid-cols-6 gap-4 mb-[10px] items-center">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Action</p>
        </div>
        <hr className="mb-[10px] h-[2px]" />

        {/* Map over the list */}
        {list.length > 0 ? (
          list.map((item, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-6 gap-4 items-center mb-[20px]"
              >
                <div className="flex justify-start">
                  <img
                    src={`${url}/images/${item.image}`}
                    alt={item.name}
                    className="w-[80px]"
                  />
                </div>

                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{'$' + item.price}</p>
                <p>x</p>
              </div>
            );
          })
        ) : (
          <p>No food items found.</p>
        )}
      </div>
    </div>
  );
}

export default ListProducts;
