import { assets } from '../../assets/assets';

export default function AppDownload() {
  return (
    <div className="mt-[80px] flex flex-col text-center gap-[20px] items-center font-semibold font-outfit text-3xl">
      <p>
        For better Experience Download
        <br /> Tomato App
      </p>
      <div className="flex gap-[50px] justify-center mt-[10px]">
        <img
          src={assets.play_store}
          alt=""
          className="max-w-[200px] cursor-pointer hover:scale-[1.06]"
        />
        <img
          src={assets.app_store}
          alt=""
          className="max-w-[200px] cursor-pointer hover:scale-[1.06]"
        />
      </div>
    </div>
  );
}
