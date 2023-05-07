import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import Logo from "./images/Logo.jpg";
const Navbar = () => {
  const router = useRouter();
  const data = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/project",
    },

    {
      name: "Contacts",
      link: "/contact",
    },
  ];

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav>
        <div className=" w-full md:mb-20 h-auto z-[100]  ">
          <div className="flex  items-center py-4 w-full justify-between h-full px-10">
            <div className="font-Arizonia font-bold text-[#6E07F3] text-3xl md:text-5xl lg:text-7xl">
              Aman
            </div>

            <div className="w-auto cursor-pointer hidden md:block ">
              <ul className="flex space-x-11 text-black  ">
                {data.map((data, index) => {
                  return (
                    <Link href={data.link}>
                      <li
                        className={`font-Dongle ${
                          router.asPath == data.link ? "text-[#6E07F3]" : ""
                        } text-3xl hover:text-[#6E07F3] group`}
                      >
                        {data.name}
                        <hr
                          className={`bg-[#6E07F3] h-[3px]  -mt-1  ease duration-200 group-hover:w-full transition-[width] ${
                            router.asPath != data.link ? "w-0" : "w-full"
                          }`}
                        />
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
            <div onClick={handleNav} className="md:hidden text-black ">
              <AiOutlineMenu size={35} />
            </div>
          </div>
          <div
            className={
              nav
                ? " md:hidden z-50 fixed top-0 left-0 w-full h-screen bg-black/50"
                : ""
            }
          >
            <div
              className={
                nav
                  ? "fixed  left-0 top-0  min-h-screen bg-white w-[85%] sm:w-[75%] md:hidden ease-in duration-300"
                  : "fixed left-[-100%] top-0 h-screen  w-[85%] sm:w-[75%] md:hidden ease-linear duration-300 "
              }
            >
              <div>
                <div
                  onClick={handleNav}
                  className=" absolute text-purple-900 font-bold right-0 cursor-pointer p-3 sm:p-4 w-[4rem] m-5 flex justify-center"
                >
                  <AiOutlineClose size={30} />
                </div>
                <ul className=" text-purple-900 font-bold  relative top-[6rem] left-[3rem]">
                  <Link onClick={handleNav} href="/">
                    <li className="font-Dongle  text-3xl sm:text-6xl mb-3">
                      HOME
                    </li>
                  </Link>
                  <Link href="/about">
                    <li className="font-Dongle  text-3xl sm:text-6xl mb-3">
                      ABOUT
                    </li>
                  </Link>
                  <Link href="/project">
                    <li className="font-Dongle  text-3xl sm:text-6xl mb-3">
                      PROJECTS
                    </li>
                  </Link>
                  <Link href="/contact">
                    <li className="font-Dongle  text-3xl sm:text-6xl mb-3">
                      CONTACT
                    </li>
                  </Link>
                </ul>

                <div className="absolute  text-purple-900 font-semibold bottom-0 font-Dongle font-medium text-4xl sm:text-6xl mb-3 w-full flex justify-center ">
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
