import React from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";
import Image from "next/image";

const Project = () => {
  const data = [
    {
      projectName: "FIREBASE AUTHENTICATION",
      description:
        "Built using Nextjs and Firebase. User can autheticate itself using email and password , user can signup if he/she is new. User have also option of google login.",
      techStack: "NEXTJS | FIREBASE",
      gitHub: "",
      liveLink: "",
    },
    {
      projectName: "FIREBASE AUTHENTICATION",
      description:
        "Built using Nextjs and Firebase. User can autheticate itself using email and password , user can signup if he/she is new. User have also option of google login.",
      techStack: "NEXTJS | FIREBASE",
    },
    {
      projectName: "FIREBASE AUTHENTICATION",
      description:
        "Built using Nextjs and Firebase. User can autheticate itself using email and password , user can signup if he/she is new. User have also option of google login.",
      techStack: "NEXTJS | FIREBASE",
    },
    {
      projectName: "FIREBASE AUTHENTICATION",
      description:
        "Built using Nextjs and Firebase. User can autheticate itself using email and password , user can signup if he/she is new. User have also option of google login.",
      techStack: "NEXTJS | FIREBASE",
    },
    {
      projectName: "FIREBASE AUTHENTICATION",
      description:
        "Built using Nextjs and Firebase. User can autheticate itself using email and password , user can signup if he/she is new. User have also option of google login.",
      techStack: "NEXTJS | FIREBASE",
    },
  ];

  return (
    <>
      <div className="w-full  mt-8 lg:mt-20 h-auto  flex justify-center">
        <div className="w-3/4  ">
          <div className="text-purple-600  tracking-wider font-Dongle font-bold text-3xl lg:mb-10 xl:mb-16  md:text-4xl lg:text-7xl underline-offset-4">
            PROJECTS
          </div>

          <div className="w-full flex justify-center">
            <div className="grid lg:w-full  lg:grid-cols-2 gap-8 m-4">
              {data.map((data, index) => {
                return (
                  <div className=" w-72 h-52 md:w-[30rem]  lg:w-[25rem] lg:h-[20rem] xl:w-[40rem] group [perspective:1000px]">
                    <div className="relative h-full w-full [transform-style:preserve-3d] transition-all duration-500 rounded-xl  group-hover:[transform:rotateY(180deg)]">
                      <div className="absolute  w-full h-full  [backface-visibility:hidden]">
                        <Image
                          className=" rounded-xl w-full h-full  "
                          src="/./images/aman.jpg"
                          width="200"
                          height="200"
                        />
                      </div>
                      <div
                        // key={index}
                        className=" rounded-xl absolute flex opacity-100 items-center [transform:rotateY(180deg)] [backface-visibility:hidden]   justify-center  w-full h-full shadow-xl shadow-gray-300 bg-gradient-to-r from-[#ffafbd] to-[#ffc3a0]"
                      >
                        <div className="w-4/5 lg:w-full">
                          <div className="mx-4 mt-2 font-Dongle font-semibold text-sm md:text-lg lg:text-2xl xl:text-4xl">
                            {data.projectName}
                          </div>
                          <div className="mx-4 mt-2 font-Dongle font-medium text-xs md:text-base lg:text-xl xl:text-3xl">
                            {data.description}
                          </div>
                          <div className="flex justify-between m-4">
                            <div className="font-Dongle font-semibold text-xs md:text-base lg:text-xl xl:text-3xl ">
                              {data.techStack}
                            </div>
                            <div className="flex space-x-3 justify-between mx-3 my-[-10px] sm:my-[-8px]  md:my-[-6px] lg:my-[-4px] xl:my-[0px]">
                              <div>
                                <AiFillGithub size={30} />
                              </div>
                              <div>
                                <HiExternalLink size={30} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
