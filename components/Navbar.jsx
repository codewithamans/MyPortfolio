import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import Logo from "./images/Logo.jpg";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav>
        <div className="bg-[#433A33] w-full  h-auto z-[100] ">
          <div className="flex items-center w-full justify-between h-full px-10">
            <div className=" bg-red-400 font-bold">
              <Image
                src="/./images/Logo.jpg"
                width="100"
                height="10"
                alt="No image"
              />
            </div>
            <div className="w-auto cursor-pointer hidden md:block ">
              <ul className="flex space-x-11 text-white">
                <li className="font-Dongle text-3xl">Home</li>
                <li className="font-Dongle text-3xl">Projects</li>
                <li className="font-Dongle text-3xl">Skills</li>
                <li className="font-Dongle  text-3xl">Contact</li>
              </ul>
            </div>
            <div onClick={handleNav} className="md:hidden text-white ">
              <AiOutlineMenu size={35} />
            </div>
          </div>
          <div
            className={
              nav
                ? " md:hidden fixed top-0 left-0 w-full h-screen bg-black/50"
                : ""
            }
          >
            <div
              className={
                nav
                  ? "fixed left-0 top-0 h-screen bg-[#e4e8ec] w-[85%] sm:w-[75%] md:hidden ease-in duration-500"
                  : "fixed left-[-100%] top-0 h-screen bg-[#e4e8ec] w-[85%] sm:w-[75%] md:hidden ease-out duration-500 "
              }
            >
              <div>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-xl absolute right-6 top-6  shadow-gray-400 cursor-pointer p-3 sm:p-4 w-[4rem] m-5 flex justify-center"
                >
                  <AiOutlineClose size={35} />
                </div>
                <ul className=" text-black  relative top-[10rem] left-[3rem]">
                  <li className="font-Dongle font-medium text-4xl sm:text-6xl mb-3">
                    HOME
                  </li>
                  <li className="font-Dongle font-medium text-4xl sm:text-6xl mb-3">
                    PROJECTS
                  </li>
                  <li className="font-Dongle font-medium text-4xl sm:text-6xl mb-3">
                    SKILLS
                  </li>
                  <li className="font-Dongle font-medium  text-4xl sm:text-6xl mb-3">
                    CONTACT
                  </li>
                </ul>
                <div className="absolute bottom-0 font-Dongle font-medium text-4xl sm:text-6xl mb-3 w-full flex justify-center ">
                  Let's Build Together
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
