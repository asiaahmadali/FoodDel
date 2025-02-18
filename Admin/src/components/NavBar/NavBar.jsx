function NavBar() {
  return (
    <div className="flex justify-between px-[20px] py-[10px] items-center font-outfit">
      <h1 className="text-3xl text-red-500 font-bold" data-aos="flip-left">
        QuickBite
      </h1>
      <img
        src="/admin.jpg"
        alt=""
        className="md:w-[60px] md:h-[60px] w-[30px] h-[30px] rounded-full"
        data-aos="zoom-in"
      />
    </div>
  );
}

export default NavBar;
