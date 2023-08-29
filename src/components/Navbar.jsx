import { useState } from "react";
import NavButton from "./NavButton";
import { nanoid } from "nanoid";

const Navbar = () => {
  const buttons = [
    { text: "Home", link: "#home" },
    { text: "About", link: "#about" },
    { text: "Projects", link: "#" },
    { text: "Education", link: "#" },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 96) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });
  const classname = {
    navstyles:
      "fixed top-0 left-0 z-40 w-full flex h-24 font-display font-semibold items-center text-2xl text-colwhite justify-between px-24 transition duration-150 ease-in",
    notScrolled:
      "bg-transparent backdrop-blur-none backdrop-brightness-100 border-b-[1px] border-transparent",
    scrolled:
      "bg-transparent backdrop-blur-md backdrop-brightness-75 border-slate-600 border-b-[1px] ",
  };
  return (
    <div
      className={`${classname.navstyles} ${
        isScrolled ? classname.scrolled : classname.notScrolled
      }`}
    >
      <div className="">Adwait Rao</div>
      <ul className="flex justify-between w-[40%]">
        {buttons.map((button) => {
          return <NavButton key={nanoid()} text={button.text} link={button.link} />;
        })}
      </ul>
    </div>
  );
};

export default Navbar;
