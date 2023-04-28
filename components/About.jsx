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
      <div
        className="fixed top-0 left-0 w-full h-1 bg-gray-500"
        style={{ transform: `translateY(${scrollPosition}px)` }}
      />
      <div className="w-full  mt-10 h-auto  flex justify-center">
        <div className="w-4/5  bg-yellow-200">
          <div className="text-blue-600 tracking-wider font-Dongle font-bold text-3xl  md:text-4xl lg:text-7xl underline-offset-4">
            KNOW ME...
          </div>
          <div className="text-blue-600 tracking-wider font-Dongle font-bold text-3xl  md:text-4xl lg:text-7xl underline-offset-4">
            ACHIEVEMENTS
          </div>
          <div className="font-Dongle text-xl md:text-3xl lg:text-4xl font-medium italic">
            {data.map((data) => {
              return (
                <ul>
                  <li>{data}</li>
                </ul>
              );
            })}
          </div>
          <div className="text-blue-600 tracking-wider font-Dongle font-bold text-3xl  md:text-4xl lg:text-7xl underline-offset-4">
            EDUCATION
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
