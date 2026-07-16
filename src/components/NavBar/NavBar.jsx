import { useEffect, useState } from "react";
import { Button, ContactBtn } from "../index";
import { div, nav } from "motion/react-client";
import { NavLink } from "react-router";

export default function NavBar() {
  const [showMobMenu, setShowMobMenu] = useState(false);
  const navItems = [
    { 
      label: "socials", 
      path: "/socials",
     }
  ]
  return (
    <header className="w-full sticky top-0 z-10">
      <div className="bg-[#FFFDFB] flex justify-between  px-2 py-1 items-center w-full border-b">
        {/* logo */}
        <NavLink 
        onClick={()=>setShowMobMenu(false)}
        to={`/`}>
          <p className="font-extrabold text-xl">Pawarya</p>
        </NavLink>
        {/* desktop menu */}
        <div className="items-center justify-between hidden md:flex md:gap-10 lg:gap-20 py-2">
          {navItems.map((item)=>(
            <NavLink key={item.label} to={item.path}>
              {item.label}
            </NavLink>
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
        {navItems.map((item)=>(
            <NavLink 
            key={item.label} 
            to={item.path}
            onClick={()=>setShowMobMenu(false)}
            >
              {item.label}
            </NavLink>
          ))}
        <div>
          <ContactBtn
            href="mailto:abhishek29112005@gmail.com"
            target="_blank"
            label="Let's work together"
            onclick={()=>setShowMobMenu(false)}
            
          />
        </div>
      </div>
    </header>
  );
}
