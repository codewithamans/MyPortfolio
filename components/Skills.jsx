import Image from "next/image";
import images from "../public/images/css1.png";

const Skills = () => {
  const data = [
    { src: "/./images/html1.png", width: "100", height: "30" },
    { src: "/./images/css1.png", width: "100", height: "30" },
    { src: "/./images/javscript1.png", width: "100", height: "30" },
    { src: "/./images/react2.png", width: "100", height: "100" },
    { src: "/./images/nodejs.png", width: "100", height: "100" },
    { src: "/./images/solidity1.png", width: "70", height: "100" },
    { src: "/./images/nextjs2.png", width: "100", height: "100" },
    { src: "/./images/tailwind.png", width: "100", height: "30" },
    { src: "/./images/python.png", width: "60", height: "60" },
    { src: "/./images/truffle.png", width: "100", height: "100" },
    { src: "/./images/hardhat.png", width: "80", height: "70" },
    { src: "/./images/metamask.png", width: "80", height: "70" },
    { src: "/./images/ethereum.png", width: "80", height: "70" },
    { src: "/./images/npm1.png", width: "100", height: "100" },
  ];
  return (
    <>
      <div className="w-full mt-8 lg:mt-32 h-auto  flex justify-center">
        <div className="w-4/5  ">
          <div className="text-[#6E07F3]  tracking-wider font-Dongle font-bold text-3xl  md:text-4xl lg:text-7xl underline-offset-4">
            SKILLS
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
            {data.map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex hover:scale-125 ease-in duration-200 justify-center rounded-full  w-[4rem] sm:w-[5rem] md:w-[5rem] lg:w-[6rem]"
                >
                  <Image
                    src={data.src}
                    width={data.width}
                    height={data.height}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
