import { assets } from '../../assets/assets';

function Footer() {
  return (
    <div className="bg-[#323232] text-[#d9d9d9] flex  font-outfit gap-[15px] p-[50px] flex-col">
      {/* content */}
      <div className="flex justify-around gap-[50px]">
        {/* left content */}
        <div className="flex flex-col gap-[20px]">
          <img src={assets.logo} alt="" className="w-[150px]" />
          <p className="w-[400px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum, nisi?
          </p>
          {/* social icons */}
          <div className="flex gap-[10px]">
            <img
              src={assets.facebook_icon}
              alt=""
              className="cursor-pointer w-[38px]"
            />
            <img
              src={assets.twitter_icon}
              alt=""
              className="cursor-pointer w-[38px]"
            />
            <img
              src={assets.linkedin_icon}
              alt=""
              className="cursor-pointer w-[38px]"
            />
          </div>
        </div>

        {/* centr content */}
        <div>
          <h1 className="text-2xl font-bold font-outfit mb-[10px] text-white">
            Company
          </h1>
          <ul className="flex flex-col gap-[10px]">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Delivery</li>
            <li className="cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        {/* right content */}
        <div>
          <h1 className="text-2xl font-bold font-outfit text-white mb-[10px]">
            Get in touch
          </h1>
          <ul className="flex flex-col gap-[10px]">
            <li>+92-3365-89589</li>
            <li>asiaahmadali17@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col mt-[20px] items-center">
        <hr className="w-[90%] h-[2px]" />
      </div>
      <p className=" ml-[60px]">
        CopyRight 2025 &copy; Tomato.com - All rights reserved
      </p>
    </div>
  );
}

export default Footer;
