import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiExternalLink } from "react-icons/hi";
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
        <div className=" w-full shadow-xl shadow-gray-300 h-auto z-[100]  ">
          <div className="flex  items-center py-4 w-full justify-between h-full px-10">
            <div className="font-Arizonia text-3xl md:text-5xl lg:text-7xl">
              Aman
            </div>

            <div className="w-auto cursor-pointer hidden md:block ">
              <ul className="flex space-x-11 text-black ">
                {data.map((data, index) => {
                  return (
                    <Link href={data.link}>
                      <li className="font-Dongle text-3xl group">
                        {data.name}
                        <hr
                          className={`bg-black h-[2px]  -mt-1  ease duration-200 group-hover:w-full transition-[width] ${
                            router.asPath != data.link ? "w-0" : "w-full"
                          }`}
                        />
                      </li>
                    </Link>
                  );
                })}
                <button className="px-6 text-white flex gap-3 items-center rounded-md -mt-2 bg-black py-3">
                  Resume
                  <HiExternalLink className="-mt-1" size={30} />
                </button>
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
                  ? "fixed  left-0 top-0 h-screen bg-[#e4e8ec] w-[85%] sm:w-[75%] md:hidden ease-in duration-500"
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
                  <Link onClick={handleNav} href="/">
                    <li className="font-Dongle font-medium text-4xl sm:text-6xl mb-3">
                      HOME
                    </li>
                  </Link>
                  <Link href="/about">
                    <li className="font-Dongle font-medium text-4xl sm:text-6xl mb-3">
                      ABOUT
                    </li>
                  </Link>
                  <Link href="/project">
                    <li className="font-Dongle font-medium text-4xl sm:text-6xl mb-3">
                      PROJECTS
                    </li>
                  </Link>
                  <Link href="/contact">
                    <li className="font-Dongle font-medium text-4xl sm:text-6xl mb-3">
                      CONTACT
                    </li>
                  </Link>
                  <button className="px-5 text-white rounded-md flex gap-3 items-center bg-black py-2">
                    Resume
                    <div className="">
                      <HiExternalLink className="-mt-1" size={30} />
                    </div>
                  </button>
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
