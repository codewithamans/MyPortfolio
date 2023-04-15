import Image from "next/image";

const Skills = () => {
  return (
    <>
      <div className="w-full mt-10 h-auto  flex justify-center">
        <div className="w-4/5  ">
          <div className="text-blue-600 tracking-wider font-Dongle font-bold text-sm sm:text-lg md:text-2xl lg:text-7xl underline-offset-4">
            SKILLS
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8">
            <div className="flex justify-center">
              <Image src="/./images/html.png" width="100" height="100" />
            </div>
            <div className="flex justify-center">
              <Image src="/./images/css.png" width="100" height="100" />
            </div>
            <div className="flex justify-center">
              <Image src="/./images/javascript.png" width="100" height="100" />
            </div>
            <div className="flex justify-center">
              <Image src="/./images/bootstrap.png" width="100" height="100" />
            </div>
            <div className="flex justify-center">
              <Image src="/./images/react.png" width="100" height="100" />
            </div>
            <div className="flex justify-center">
              <Image src="/./images/nodejs.png" width="100" height="100" />
            </div>
            <div className="flex justify-center">
              <Image src="/./images/solidity.png" width="100" height="100" />
            </div>
            <div className="flex justify-center">
              <Image src="/./images/nextjs.png" width="100" height="100" />
            </div>
            <div className="flex justify-center">
              <Image src="/./images/tailwind.png" width="100" height="100" />
            </div>
            <div className="flex justify-center">
              <Image src="/./images/python.png" width="100" height="100" />
            </div>
            <div className="flex justify-center">
              <Image src="/./images/npm.png" width="100" height="100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
