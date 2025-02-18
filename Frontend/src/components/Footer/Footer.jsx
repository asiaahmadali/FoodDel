import { assets } from '../../assets/assets';

function Footer() {
  return (
    <div
      id="contact-us"
      className="bg-blue-900 text-[#d9d9d9] font-outfit p-[50px] flex flex-col sm:flex-row gap-[30px] sm:gap-[50px] justify-between"
    >
      {/* content */}
      <div className="flex flex-col lg:flex-row gap-[30px] sm:gap-[50px] w-full">
        {/* left content */}
        <div className="flex flex-col gap-[20px] w-full sm:w-auto">
          <h1 className="text-red-600 font-bold  md:text-4xl text-3xl">
            QuickBite
          </h1>
          <p className="w-full sm:w-[400px] text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum, nisi?
          </p>
          {/* social icons */}
          <div className="flex gap-[10px] mt-[10px]">
            <img
              src={assets.facebook_icon}
              alt="facebook"
              className="cursor-pointer hover:shadow-lg hover:shadow-red-500 rounded-full  w-[38px] hover:scale-[1.1] transition-all duration-300 text-red-500"
            />
            <img
              src={assets.twitter_icon}
              alt="twitter"
              className="cursor-pointer hover:shadow-lg hover:shadow-red-500 rounded-full w-[38px] hover:scale-[1.1] transition-all duration-300 text-red-500"
            />
            <img
              src={assets.linkedin_icon}
              alt="linkedin"
              className="cursor-pointer hover:shadow-lg hover:shadow-red-500 rounded-full w-[38px] hover:scale-[1.1] transition-all duration-300 text-red-500"
            />
          </div>
        </div>

        {/* center content */}
        <div className="flex flex-col w-full sm:w-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-[10px]">
            Company
          </h1>
          <ul className="flex flex-col gap-[10px] text-sm sm:text-base">
            <li className="cursor-pointer hover:text-red-500 transition-all duration-300">
              Home
            </li>
            <li className="cursor-pointer hover:text-red-500 transition-all duration-300">
              About Us
            </li>
            <li className="cursor-pointer hover:text-red-500 transition-all duration-300">
              Delivery
            </li>
            <li className="cursor-pointer hover:text-red-500 transition-all duration-300">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* right content */}
        <div className="flex flex-col w-full sm:w-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-[10px]">
            Get in touch
          </h1>
          <ul className="flex flex-col gap-[10px] text-sm sm:text-base">
            <li>+11-1111-11111</li>
            <li className="hover:text-red-500">abcd@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col mt-[20px] items-center">
        <hr className="w-[90%] h-[2px] bg-[#d9d9d9]" />
      </div>
      <p className="text-center mt-[20px] text-sm sm:text-base">
        CopyRight 2025 &copy; Tasty.com - All rights reserved
      </p>
    </div>
  );
}

export default Footer;
