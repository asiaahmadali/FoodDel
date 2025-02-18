function Header() {
  return (
    <div className="md:my-[100px] my-[15px] " data-aos="zoom-in">
      {/* header div */}
      <div className="bg-[url(head.avif)] rounded-md bg-no-repeat bg-center flex items-center justify-center bg-cover min-h-[450px] w-full sm:min-h-[450px] xs:min-h-[250px]">
        <div
          data-aos="zoom-in"
          className="flex text-white flex-col gap-2 items-center justify-center"
        >
          <h1 className=" font-outfit text-2xl md:text-5xl font-bold w-[280px] md:w-[450px]">
            Order your favourite food here
          </h1>
          <p className=" w-[280px] md:w-[400px] mt-[10px]">
            welcome to my website where we bring customer satisfaction and best
            services for home delivery.
          </p>
          <button className="p-[12px] bg-red-500 text-white hover:bg-red-400 rounded-full w-[150px] font-outfit mt-[5px]">
            <a href="#menu">view menu</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
