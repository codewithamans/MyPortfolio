import React from "react";
import { AiOutlineMail, AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="w-full mt-8 md:mt-16 lg:mt-32  bg-[#ecf0f3] shadow-xl shadow-gray-300 h-auto z-[100] ">
          <div className="grid md:grid-cols-2 gap-2 md:gap-4 lg:gap-8">
            <div className=" font-Dongle flex justify-center">
              <div className="flex items-center text-xl md:text-3xl lg:text-5xl ">
                Build By AMAN SINGH
              </div>
              <div className="text-red-600  text-[4rem]">&hearts;</div>
            </div>
            <div className="flex justify-center ">
              <div className=" font-Dongle text-lg md:text-2xl lg:text-3xl  items-center">
                <div className="mx-4 md:mt-3">Contact Me: </div>
                <div className="flex">
                  <div className="mx-4 md:mt-3">
                    <AiOutlineMail />
                  </div>
                  <div className="mt-[-4px] md:mt-[6px]">
                    a.jagat159753@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-4 font-Dongle text-center text-xl md:text-2xl lg:text-5xl">
            &#169; Copyright, All rights are reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
