import { useEffect, useState } from "react";
import { Button, ContactBtn } from "../index";
import { div, nav } from "motion/react-client";

export default function NavBar() {
  const [showMobMenu, setShowMobMenu] = useState(false);
  const navItems = [{ label: "projects", path: "" }]
  return (
    <header className="w-full">
      <div className="bg-[#FFFDFB] flex justify-between  px-2 py-1 items-center w-full border-b">
        {/* logo */}
        <div>
          <p className="font-extrabold text-xl">Pawarya</p>
        </div>
        {/* desktop menu */}
        <div className="items-center justify-between hidden md:flex md:gap-10 lg:gap-20 py-2">
          <div>Case studies</div>
          {navItems.map((item) => (
            <div>{item.label}</div> //add navlink
          ))}
          <div>
            <ContactBtn
              href="mailto:abhishek29112005@gmail.com"
              target="_blank"
              label="Let's work together"
            />
          </div>
        </div>
        {/* mobile menu btn */}
        <div className="md:hidden mobile-menu">
          <Button
            classname="font-medium"
            label={showMobMenu === false ? "menu" : "X"}
            onclick={() => {
              setShowMobMenu((prev) => !prev);
            }}
          />
        </div>
      </div>
      {/* mobile menu */}
      <div
        className={`${showMobMenu === true ? "flex flex-col" : "hidden"} md:hidden gap-4 items-end px-2 py-4`}
      >
        <div>Case studies</div>
        {navItems.map((item) => (
          <div>{item.label}</div> //add navlink
        ))}
        <div>
          <ContactBtn
            href="mailto:abhishek29112005@gmail.com"
            target="_blank"
            label="Let's work together"
          />
        </div>
      </div>
    </header>
  );
}
