import React from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";

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
      <div className="w-full mt-8 lg:mt-32 h-auto  flex justify-center">
        <div className="w-4/5  ">
          <div className="text-blue-600 tracking-wider font-Dongle font-bold text-3xl  md:text-4xl lg:text-7xl underline-offset-4">
            PROJECTS
          </div>
          <div className="grid md:grid-cols-2 gap-8 m-4">
            {data.map((data, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-xl lg:hover:scale-105  ease-in-out duration-100 items-center justify-center h-auto w-full shadow-xl shadow-gray-500 bg-[#ecf0f3]"
                >
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
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
