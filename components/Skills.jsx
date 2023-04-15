import Image from "next/image";
import images from "../public/images/css1.png";

const Skills = () => {
  return (
    <>
      <div className="w-full mt-8 h-auto  flex justify-center">
        <div className="w-4/5  ">
          <div className="text-blue-600 tracking-wider font-Dongle font-bold text-3xl  md:text-4xl lg:text-7xl underline-offset-4">
            SKILLS
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
            <div className="flex hover:scale-125 ease-in duration-200 justify-center rounded-full shadow-xl shadow-gray-400 w-[4rem] sm:w-[5rem] md:w-[5rem] lg:w-[6rem]">
              <Image src="/./images/html1.png" width="100" height="30" />
            </div>
            <div className="flex hover:scale-125 ease-in duration-200 justify-center rounded-full shadow-xl shadow-gray-400 w-[4rem] sm:w-[5rem] md:w-[5rem] lg:w-[6rem]">
              <Image src="/./images/css1.png" width="100" height="30" />
            </div>
            <div className="flex hover:scale-125 ease-in duration-200 justify-center rounded-full shadow-xl shadow-gray-400 w-[4rem] sm:w-[5rem] md:w-[5rem] lg:w-[6rem]">
              <Image src="/./images/javscript1.png" width="100" height="30" />
            </div>

            <div className="flex hover:scale-125 ease-in duration-200 justify-center rounded-full shadow-xl shadow-gray-400 w-[4rem] sm:w-[5rem] md:w-[5rem] lg:w-[6rem]">
              <Image src="/./images/react2.png" width="100" height="100" />
            </div>
            <div className="flex hover:scale-125 ease-in duration-200 justify-center rounded-full shadow-xl shadow-gray-400 w-[4rem] sm:w-[5rem] md:w-[5rem] lg:w-[6rem]">
              <Image src="/./images/nodejs.png" width="100" height="100" />
            </div>
            <div className="flex hover:scale-125 ease-in duration-200 justify-center rounded-full shadow-xl shadow-gray-400 w-[4rem] sm:w-[5rem] md:w-[5rem] lg:w-[6rem]">
              <Image src="/./images/solidity1.png" width="70" height="100" />
            </div>
            <div className="flex hover:scale-125 ease-in duration-200 justify-center rounded-full shadow-xl shadow-gray-400 w-[4rem] sm:w-[5rem] md:w-[5rem] lg:w-[6rem]">
              <Image src="/./images/nextjs2.png" width="100" height="100" />
            </div>
            <div className="flex hover:scale-125 ease-in duration-200 justify-center rounded-full shadow-xl shadow-gray-400 w-[4rem] sm:w-[5rem] md:w-[5rem] lg:w-[6rem]">
              <Image src="/./images/tailwind.png" width="100" height="100" />
            </div>
            <div className="flex hover:scale-125 ease-in duration-200 justify-center rounded-full shadow-xl shadow-gray-400 w-[4rem] sm:w-[5rem] md:w-[5rem] lg:w-[6rem]">
              <Image src="/./images/python.png" width="60" height="60" />
            </div>
            <div className="flex hover:scale-125 ease-in duration-200 justify-center rounded-full shadow-xl shadow-gray-400 w-[4rem] sm:w-[5rem] md:w-[5rem] lg:w-[6rem]">
              <Image src="/./images/npm1.png" width="100" height="100" />
            </div>
            <div className="flex hover:scale-125 ease-in duration-200 justify-center rounded-full shadow-xl shadow-gray-400 w-[4rem] sm:w-[5rem] md:w-[5rem] lg:w-[6rem]">
              <Image src="/./images/truffle.png" width="100" height="100" />
            </div>
            <div className="flex hover:scale-125 h-auto ease-in duration-300 justify-center object-fill rounded-full shadow-xl shadow-gray-400 w-[4rem] sm:w-[5rem] md:w-[5rem] lg:w-[6rem]">
              <Image src="/./images/hardhat.png" width="80" height="70" />
            </div>
            <div className="flex hover:scale-125 h-auto ease-in duration-200 justify-center object-fill rounded-full shadow-xl shadow-gray-400 w-[4rem] sm:w-[5rem] md:w-[5rem] lg:w-[6rem]">
              <Image src="/./images/metamask.png" width="80" height="70" />
            </div>
            <div className="flex hover:scale-125 h-auto ease-in duration-200 justify-center object-fill rounded-full shadow-xl shadow-gray-400 w-[4rem] sm:w-[5rem] md:w-[5rem] lg:w-[6rem]">
              <Image src="/./images/ethereum.png" width="80" height="70" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
