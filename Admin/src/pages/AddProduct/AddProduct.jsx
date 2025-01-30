import { assets } from '../../assests/assets';

function AddProduct() {
  return (
    <div>
      <form>
        {/* product image */}
        <div className="flex flex-col">
          <h1>Upload image</h1>
          <label htmlFor="image">
            <img src={assets.upload_area} alt="" />
          </label>
          <input type="file" id="image" required hidden />
        </div>

        {/* product name */}
        <div>
          <p>product name</p>
          <input type="text" name="name" placeholder="product name" required />
        </div>

        {/* product description */}
        <div>
          <p>Product description</p>
          <textarea
            name="description"
            rows={5}
            placeholder="write decription...."
            aria-required
          ></textarea>
        </div>

        {/* product cagtegory */}
        <div>
          <p>product category</p>
          <select name="category">
            <options value="Salad">Salad</options>
            <options value="Rolls">Rolls</options>
            <options value="Deserts">Deserts</options>
            <options value="Sandwich">Sandwich</options>
            <options value="Cake">Cake</options>
            <options value="Pure Veg">Pure Veg</options>
            <options value="Pasta">Pasta</options>
            <options value="Noodles">Noodles</options>
          </select>
        </div>

        {/* product price */}
        <div>
          <p>Product Price</p>
          <input type="Number" name="price" placeholder="$10" />
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddProduct;
