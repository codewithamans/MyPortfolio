import { useEffect, useState } from "react";
const About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const data = [
    "Qualified All INDIA National Eligibility Test(Assistant Professor)",
    "Selected in top 200 students in a test organised by GAIL all over India",
    "Got selected in VEDANTU as a Tutor ",
  ];
  return (
    <>
      <div className="w-full  mt-10 h-auto  flex justify-center">
        <div className="w-4/5  ">
          <div className="text-[#6E07F3] tracking-wider font-Dongle font-bold text-3xl  md:text-4xl lg:text-7xl underline-offset-4">
            KNOW ME...
          </div>
          <div className="text-[#6E07F3] mt-20 tracking-wider font-Dongle font-bold text-3xl  md:text-4xl lg:text-7xl underline-offset-4">
            ACHIEVEMENTS
          </div>
          <div className="font-Dongle mt-8 text-xl md:text-3xl lg:text-4xl font-medium italic">
            <ul className="list-disc ml-12">
              {data.map((data) => {
                return <li>{data}</li>;
              })}
            </ul>
          </div>
          <div className="text-purple-600 mt-20 tracking-wider font-Dongle font-bold text-3xl  md:text-4xl lg:text-7xl underline-offset-4">
            EDUCATION
          </div>
          <div className=" flex justify-center mt-12">
            <div className="w-4/5 ">
              <ol className="relative border-l border-gray-300 ">
                <li className="ml-6 mb-10">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-400 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    1
                  </span>
                  <h3 className="mb-1 text-3xl font-Dongle font-bold text-gray-900 dark:text-white">
                    M.Sc. (COMPUTER SCIENCE)
                  </h3>

                  <h3 className="mb-1 text-sm font-normal  text-gray-400 dark:text-gray-500">
                    2020-2020
                  </h3>
                  <p className=" text-2xl font-Dongle text-gray-500 dark:text-gray-400">
                    Graduated from University Of Lucknow with 72.5% aggregates.
                  </p>
                </li>
                <li className="ml-6 mb-10">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-400 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    2
                  </span>
                  <h3 className="mb-1 text-3xl font-Dongle font-bold text-gray-900 dark:text-white">
                    B.Sc. (COMPUTER SCIENCE)
                  </h3>

                  <h3 className="mb-1 text-sm font-normal  text-gray-400 dark:text-gray-500">
                    2017-2020
                  </h3>
                  <p className=" text-2xl font-Dongle text-gray-500 dark:text-gray-400">
                    Graduated from University Of Lucknow with 65.3% aggregates.
                  </p>
                </li>

                <li className="ml-6 mb-10">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-400 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    3
                  </span>
                  <h3 className="mb-1 text-3xl font-Dongle font-bold text-gray-900 dark:text-white">
                    CLASS 12 | CBSE
                  </h3>

                  <h3 className="mb-1 text-sm font-normal  text-gray-400 dark:text-gray-500">
                    2015-2017
                  </h3>
                  <p className=" text-2xl font-Dongle text-gray-500 dark:text-gray-400">
                    Completed from Rani Laxmi Bai Memorial School with 91%
                    aggregates.
                  </p>
                </li>
                <li className="ml-6 mb-10">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-400 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    4
                  </span>
                  <h3 className="mb-1 text-3xl font-Dongle font-bold text-gray-900 dark:text-white">
                    CLASS 10 | CBSE
                  </h3>

                  <h3 className="mb-1 text-sm font-normal  text-gray-400 dark:text-gray-500">
                    2013-2015
                  </h3>
                  <p className=" text-2xl font-Dongle text-gray-500 dark:text-gray-400">
                    Completed from Rani Laxmi Bai Memorial School with 10
                    C.G.P.A.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
