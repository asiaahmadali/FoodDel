function Header() {
  return (
    <div>
      {/* header div */}
      <div className="bg-[url(header_img.png)] rounded-md bg-no-repeat bg-cover min-h-[450px] flex items-center p-[100px]">
        {/* header content div */}
        <div className="flex flex-col gap-2">
          <h1 className="text-white font-outfit text-5xl font-bold w-[450px]">
            Order your favourite food here
          </h1>
          <p className="text-white w-[400px] mt-[10px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            hic error rerum molestiae. Harum officiis ea provident ducimus odio
            eum.
          </p>
          <button className="p-[12px] bg-white rounded-full w-[150px] font-outfit mt-[5px]">
            view menu
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
