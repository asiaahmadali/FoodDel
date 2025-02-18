import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function ListProducts() {
  const [list, setList] = useState([]);
  const backendurl = `http://localhost:3000`;

  // getlist api
  const fetchList = async () => {
    const response = await axios.get(`${backendurl}/api/food/list`);
    console.log(response.data);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error('Data not found');
    }
  };

  const removeItem = async (itemid) => {
    const response = await axios.post(`${backendurl}/api/food/delete`, {
      id: itemid,
    });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error('error');
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="flex flex-col m-[10px] md:m-[40px] font-outfit w-[70vw] ">
      <h1 className="text-2xl font-bold mb-[20px]">All Food List</h1>
      {/* items title */}

      <div className="grid grid-cols-4 md:grid-cols-5 justify-items-between gap-2 text-[14px] md:text-[16px] md:gap-4 border-[1px] border-black border-b-0 border-opacity-[70%] p-[10px] bg-gray-100 items-center">
        <p>Image</p>
        <p>Name</p>
        <p className="hidden md:block">Category</p>
        <p>Price</p>
        <p>Action</p>
      </div>
      <hr className=" h-[2px]" />

      {/* Map over the list */}
      {list.length > 0 ? (
        list.map((item, index) => {
          return (
            <div
              key={index}
              data-aos="zoom-in"
              className="grid  text-[12px] gap-4 md:text-[16px] grid-cols-4 md:grid-cols-5 items-center p-[10px] border-[1px] border-black border-opacity-[70%]"
            >
              <div className="flex justify-start justify-items-between">
                <img
                  src={`${backendurl}/images/${item.image}`}
                  alt={item.name}
                  className="md:w-[60px] md:h-[50px] w-[30px] h-[30px]"
                />
              </div>

              <p>{item.name}</p>
              <p className="hidden md:block">{item.category}</p>
              <p>{'$' + item.price}</p>
              <p
                className="cursor-pointer"
                onClick={() => removeItem(item._id)}
              >
                x
              </p>
            </div>
          );
        })
      ) : (
        <p>No food items found.</p>
      )}
    </div>
  );
}

export default ListProducts;
