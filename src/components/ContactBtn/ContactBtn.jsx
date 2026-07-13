export default function ContactBtn({ label = "button", onclick, ...props }) {
  return (
    <a
      className="bg-[#1f1f1f] text-white p-2 rounded px-4"
      onClick={onclick}
      {...props}
    >
      {label}
    </a>
  );
}
