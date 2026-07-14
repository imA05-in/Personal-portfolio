export default function Button({ label = "button", onclick, classname,...props }) {
  return (
    <button
      className={`bg-[#1f1f1f] text-white p-2 rounded px-4 ${classname}`}
      onClick={onclick}
      {...props}
    >
      {label}
    </button>
  );
}
