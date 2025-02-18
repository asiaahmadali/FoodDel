import { assets } from '../../assets/assets';

export default function AppDownload() {
  return (
    <div
      id="mobile-app"
      className="mt-[80px] flex flex-col text-center gap-[10px] md:gap-[20px] items-center font-semibold font-outfit text-xl md:text-3xl px-2 md:px-4 sm:px-6"
    >
      <p>
        For better Experience Download
        <br /> Tomato App
      </p>
      <div className="flex gap-[10px] md:gap-[50px] justify-center mt-[10px] flex-wrap">
        <img
          src={assets.play_store}
          alt="Play Store"
          className="max-w-[200px] cursor-pointer hover:scale-[1.06] mb-4 sm:mb-0"
          data-aos="flip-left"
        />
        <img
          src={assets.app_store}
          alt="App Store"
          className="max-w-[200px] cursor-pointer hover:scale-[1.06] mb-4 sm:mb-0"
          data-aos="flip-left"
        />
      </div>
    </div>
  );
}
