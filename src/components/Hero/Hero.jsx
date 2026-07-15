import Heroimg from "../../../screenshots/0.png";

export default function Hero({ Himg = Heroimg, text="Hero text" }) {
  return (
    <div className="relative">
      <img
        src={Himg}
        alt="img"
        className=" max-h-70 object-cover opacity-20 w-full bg-black"
      />
      <div className="absolute top-0 flex justify-center items-center w-full h-full ">
        <p className="md:text-6xl text-3xl font-bold opacity-80">{text}</p>
      </div>
    </div>
  );
}
