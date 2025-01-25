function Header() {
  return (
    <div>
      {/* header div */}
      <div className="bg-[url(header_img.png)] bg-no-repeat bg-cover h-[400px] flex items-center justify-center">
        {/* header content div */}
        <div className="">
          <h1 className="text-white font-outfit text-4xl font-bold">
            Order your favourite food
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            hic error rerum molestiae. Harum officiis ea provident ducimus odio
            eum.
          </p>
          <button className="p-[10px] bg-white rounded-md">view menu</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
