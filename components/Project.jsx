import React from "react";

const Project = () => {
  return (
    <>
      <div className="w-full mt-8 h-auto  flex justify-center">
        <div className="w-4/5 bg-yellow-200 ">
          <div className="text-blue-600 tracking-wider font-Dongle font-bold text-3xl  md:text-4xl lg:text-7xl underline-offset-4">
            PROJECTS
          </div>
          <div className="grid md:grid-cols-2 gap-8 m-4">
            <div className=" bg-green-200 hover:scale-110 ease-in-out duration-100 items-center justify-center h-auto w-full shadow-xl shadow-gray-500 hover:bg-gradient-to-r from-purple-500 to-blue-400">
              <div className="mx-4 mt-2 font-Dongle font-semibold text-sm md:text-lg lg:text-2xl xl:text-4xl">
                FIREBASE AUTHENTICATION
              </div>
              <div className="mx-4 mt-2 font-Dongle font-medium text-xs md:text-base lg:text-xl xl:text-3xl">
                Built using Nextjs and Firebase. User can autheticate itself
                using email and password , user can signup if he/she is new.
                User have also option of google login.
              </div>
              <div className="flex justify-between m-4">
                <div className="font-Dongle font-semibold text-xs md:text-base lg:text-xl xl:text-3xl ">
                  NEXTJS | FIREBASE
                </div>
                <div>1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
