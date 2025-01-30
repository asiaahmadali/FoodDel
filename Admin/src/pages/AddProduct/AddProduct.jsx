import { useEffect, useState } from 'react';
import { assets } from '../../assests/assets';
import axios from 'axios';

function AddProduct() {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Salad',
  });

  //   changeHandler

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  //   api call

  const SubmitHandler = async (e) => {
    e.preventDefault();
    // url for add
    const url = 'http://localhost:3000';
    // form handling

    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', Number(data.price));
    formData.append('category', data.category);

    // api call

    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: '',
        description: '',
        price: '',
        category: 'Salad',
      });
      setImage(false);
    } else {
      console.log('error');
    }
  };
  return (
    <div>
      <form
        onSubmit={SubmitHandler}
        className="m-[30px]  text-[#6d6d6d] flex flex-col gap-[10px] w-[70%] font-outfit text-[15px]"
      >
        {/* product image */}
        <div className="flex flex-col w-[100px] gap-[10px] ">
          <h1>Upload image</h1>
          <label htmlFor="image" className="cursor-pointer">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
              className="w-[100px] h-[90px]"
            />
          </label>
          <input
            type="file"
            id="image"
            required
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        {/* product name */}
        <div className="flex flex-col w-[30vw] gap-[8px]">
          <p>product name</p>
          <input
            type="text"
            name="name"
            placeholder="product name"
            required
            onChange={changeHandler}
            value={data.name}
            className="outline-none border-[1px] border-black border-opacity-[60%] rounded-md p-[10px]"
          />
        </div>

        {/* product description */}
        <div className="flex flex-col w-[30vw] gap-[8px]">
          <p>Product description</p>
          <textarea
            name="description"
            rows={5}
            onChange={changeHandler}
            value={data.description}
            placeholder="write decription...."
            aria-required
            className="outline-none border-[1px] border-black border-opacity-[60%] rounded-md p-[10px]"
          ></textarea>
        </div>

        <div className="flex gap-[20px] w-[30vw] ">
          {/* product cagtegory */}
          <div className="flex flex-col gap-[8px]">
            <p>product category</p>
            <select
              name="category"
              onChange={changeHandler}
              value={data.category}
              className="outline-none border-[1px] border-black border-opacity-[60%] rounded-md p-[10px]"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          {/* product price */}
          <div className="flex flex-col gap-[8px]">
            <p>Product Price</p>
            <input
              type="Number"
              name="price"
              onChange={changeHandler}
              value={data.price}
              placeholder="$10"
              className="outline-none border-[1px] border-black border-opacity-[60%] rounded-md p-[10px]"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-orange-500 p-[10px] w-[30vw] mt-[30px] rounded-md text-white"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
