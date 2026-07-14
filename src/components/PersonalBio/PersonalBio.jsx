import Profile from "../../assets/images/Profile.png";

export default function PersonalBio({
  img = Profile,
  heading,
  introPrimary,
  introSecondary,
}) {
  return (
    <div className="w-full py-1 flex flex-col gap-4">
      {/* Profile Image */}
      <div className="rounded-full">
        <img
          src={img}
          alt="img"
          className="rounded-full object-cover opacity-90 bg-white size-20"
        />
      </div>
      {/* heading  */}
      <h1 className="font-extrabold text-2xl">{heading}</h1>
      {/* intro */}
      <div className="font-medium flex flex-col gap-2 text-justify">
        <div className="flex ">{introPrimary}</div>
        <div>{introSecondary}</div>
      </div>
    </div>
  );
}
