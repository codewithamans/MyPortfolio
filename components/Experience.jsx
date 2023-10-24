import React from "react";

const Experience = () => {
  return (
    <>
      <div className="w-full mt-8 lg:mt-32 h-auto  flex justify-center">
        <div className="w-4/5  ">
          <div className="text-purple-600   tracking-wider font-Dongle font-bold text-3xl  md:text-4xl lg:text-7xl underline-offset-4">
            EXPERIENCE
          </div>
          <div className=" md:flex justify-center mt-6 md:mt-12">
            <div className="md:w-4/5 ">
              <ol className="relative border-l border-gray-300 ">
                <li className="ml-6 mb-10">
                  <span className="absolute lg:text-xl flex  items-center justify-center w-6 h-6 lg:w-10 lg:h-10 bg-purple-200 rounded-full -left-3 lg:-left-5 ring-8 ring-white  ">
                    1
                  </span>
                  <h3 className="mb-1 lg:ml-4 text-2xl md:text-4xl lg:text-5xl font-Dongle font-bold text-gray-700">
                    ZYLICON HACKDEV TECHNOLGIES
                  </h3>

                  <h3 className="mb-2 lg:ml-4 text-xs md:text-xl lg:text-2xl font-normal  text-gray-400 dark:text-gray-500">
                    Front-end Developer | April 2022 - July 2022
                  </h3>

                  <ul className="list-disc pl-4 lg:pl-8 text-xl md:text-2xl lg:ml-4 lg:text-3xl font-Dongle text-gray-500 dark:text-gray-400">
                    <li>Worked on an e-commerce project.</li>
                    <li>Built complete front-end from scratch.</li>
                    <li>
                      Worked with technologies - Reactjs, Redux, Material Ui,
                      Tailwind and Bootstrap.
                    </li>
                  </ul>
                </li>
                <li className="ml-6 mb-10">
                  <span className="absolute lg:text-xl flex items-center justify-center w-6 h-6 lg:w-10 lg:h-10 lg:-left-5 bg-purple-200 rounded-full -left-3 ring-8 ring-white ">
                    2
                  </span>
                  <h3 className="mb-1 text-2xl lg:ml-4 md:text-4xl lg:text-5xl font-Dongle font-bold text-gray-700">
                    ONLINE TUTOR
                  </h3>

                  <h3 className="mb-2 text-xs lg:ml-4 md:text-xl lg:text-2xl font-normal  text-gray-400 dark:text-gray-500">
                    July 2020 - Present
                  </h3>

                  <ul className="list-disc pl-4 lg:pl-8 text-xl md:text-2xl lg:ml-4 lg:text-3xl font-Dongle text-gray-500 dark:text-gray-400">
                    <li> Mentored more than 50 students.</li>
                    <li>
                      Worked on strengthening concepts in various domains like
                      programming and mathematics.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
