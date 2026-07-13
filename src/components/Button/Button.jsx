export default function Button({ label = "button", onclick, ...props }) {
  return (
    <button
      className={`bg-[#1f1f1f] text-white p-2 rounded px-4 ${props.classname}`}
      onClick={onclick}
      {...props}
    >
      {label}
    </button>
  );
}
