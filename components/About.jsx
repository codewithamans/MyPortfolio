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
          <div className="text-purple-600  tracking-wider font-Dongle font-bold text-3xl  md:text-4xl lg:text-7xl underline-offset-4">
            KNOW ME...
          </div>
          <p className="mb-1  mt-4 font-Dongle text-lg md:text-2xl lg:text-3xl  mx-2 font-normal  text-gray-900 ">
            I am a proud <span className="one"> Computer Science </span>
            graduate , having recently earned my master's degree with a First
            Division distinction. My passion lies at the intersection of coding
            and teaching. Over the past few years, I've been privileged to
            educate students in Mathematics, Physics, and Computer Science. As a
            fervent educator, I'm committed to sparking curiosity, driving
            innovation, and instilling an enduring love for learning in my
            students. Additionally, I'm a dedicated night owl, which means my
            best work often unfolds after sunset.
          </p>
          <p className="mb-1 mt-4 font-Dongle text-lg md:text-2xl lg:text-3xl  mx-2 font-normal  text-gray-900">
            Diving deep into <span className="two">JavaScript's </span> ocean,
            I've strong knowledge in ReactJS, NextJS, and Redux. Beyond the
            front-end realm, my interests expand to the intriguing universes of
            Blockchain and AI. With a sharp focus on smart contracts and web3's
            futuristic trends—like DeFi, NFTs, and Cryptocurrency—I'm always at
            the frontier of digital innovation.
          </p>
          <p className="mb-1 mt-4 font-Dongle text-lg md:text-2xl lg:text-3xl  mx-2 font-normal  text-gray-900">
            In the quiet moments away a from the keyboard, you'll find me doing
            exercises, diving deep into the latest cinematic masterpieces, or
            indulging in some lively banter with friends. While binge-watching
            web series isn't typically my cup of tea, there are some exceptions
            to the rule. "Squid Game," "Alice in Borderland," and "Asur" have
            all captivated my attention and made it to my list of must-watches.
          </p>
          <div className="text-purple-600  mt-8 md:mt-20 tracking-wider font-Dongle font-bold text-3xl  md:text-4xl lg:text-7xl underline-offset-4">
            ACHIEVEMENTS
          </div>
          <div className="font-Dongle mt-8 text-xl md:text-3xl lg:text-4xl font-medium italic">
            <ul className="list-disc ml-12">
              {data.map((data) => {
                return <li>{data}</li>;
              })}
            </ul>
          </div>
          <div className="text-purple-600 mt-8 md:mt-20 tracking-wider font-Dongle font-bold text-3xl  md:text-4xl lg:text-7xl underline-offset-4">
            EDUCATION
          </div>
          <div className=" md:flex justify-center mt-8 md:mt-12">
            <div className="md:w-4/5 ">
              <ol className="relative border-l border-gray-300 ">
                <li className="ml-6 mb-10">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-200 rounded-full -left-3 ring-8 ring-white">
                    1
                  </span>
                  <h3 className="mb-1 text-3xl mx-2 font-Dongle font-bold text-gray-900 dark:text-gray-700">
                    M.Sc. (COMPUTER SCIENCE)
                  </h3>

                  <h3 className="mb-1 text-sm mx-2 font-normal  text-gray-400 dark:text-gray-500">
                    2020-2022
                  </h3>
                  <p className=" text-2xl mx-2 font-Dongle text-gray-500 dark:text-gray-400">
                    Graduated from University Of Lucknow with 72.5% aggregates.
                  </p>
                </li>
                <li className="ml-6 mb-10">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-200 rounded-full -left-3 ring-8 ring-white">
                    2
                  </span>
                  <h3 className="mb-1 text-3xl mx-2 font-Dongle font-bold text-gray-900 dark:text-gray-700">
                    B.Sc. (COMPUTER SCIENCE)
                  </h3>

                  <h3 className="mb-1 text-sm mx-2 font-normal  text-gray-400 dark:text-gray-500">
                    2017-2020
                  </h3>
                  <p className=" text-2xl mx-2 font-Dongle text-gray-500 dark:text-gray-400">
                    Graduated from University Of Lucknow with 65.3% aggregates.
                  </p>
                </li>

                <li className="ml-6 mb-10">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-200 rounded-full -left-3 ring-8 ring-white">
                    3
                  </span>
                  <h3 className="mb-1 mx-2 text-3xl font-Dongle font-bold text-gray-900 dark:text-gray-700">
                    CLASS 12 | CBSE
                  </h3>

                  <h3 className="mb-1 mx-2 text-sm font-normal  text-gray-400 dark:text-gray-500">
                    2015-2017
                  </h3>
                  <p className=" text-2xl mx-2 font-Dongle text-gray-500 dark:text-gray-400">
                    Completed from Rani Laxmi Bai Memorial School with 91%
                    aggregates.
                  </p>
                </li>
                <li className="ml-6  mb-10">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-200 rounded-full -left-3 ring-8 ring-white">
                    4
                  </span>
                  <h3 className="mb-1 mx-2 text-3xl font-Dongle font-bold text-gray-900 dark:text-gray-700">
                    CLASS 10 | CBSE
                  </h3>

                  <h3 className="mb-1 mx-2  text-sm font-normal  text-gray-400 dark:text-gray-500">
                    2013-2015
                  </h3>
                  <p className=" text-2xl mx-2  font-Dongle text-gray-500 dark:text-gray-400">
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
