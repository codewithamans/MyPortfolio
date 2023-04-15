import Image from "next/image";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineMail,
} from "react-icons/ai";
const Main = () => {
  return (
    <>
      <div className="w-full mt-10 h-auto  flex justify-center">
        <div className="w-3/5 bg-yellow-300  flex justify-center ">
          <div>
            <div className="flex justify-center mb-2">
              <Image
                className=" rounded-full shadow-xl shadow-gray-500"
                src="/./images/aman.jpg"
                width="200"
                height="200"
              />
            </div>
            <div className="font-extrabold font-Dongle  text-center  text-4xl md:text-7xl lg:text-9xl">
              Hi, I am
              <span className="font-Dancing mx-2 sm:mx-3 md:mx-4 lg:mx-5 text-blue-600 ">
                Aman
              </span>
            </div>
            <div className="font-extrabold text-center font-Dongle text-3xl md:text-5xl lg:text-6xl">
              A Frontend And Aspiring Blockchain Developer
            </div>
            <div className="text-center font-Dongle font-medium text-sm md:text-lg lg:text-2xl">
              I'm a front-end developer who loves to build cool things.
              Currently, I am focusing on upgrading the skills of front-end
              while learning blockchain technology.I am looking for better
              opportunities to enhance my skills and knowledge. I am always
              ready to learn new tech stack .
            </div>
            <div className="text-center font-Dongle font-medium text-2xl md:text-3xl lg:text-4xl">
              Connect With Me, Let's Build Together
            </div>
            <div className="flex text justify-center">
              <div className="rounded-full shadow-xl shadow-gray-400 cursor-pointer p-2 sm:p-2 w-[3rem] m-3 flex justify-center">
                <AiFillGithub size={25} />
              </div>
              <div className="rounded-full shadow-xl shadow-gray-400 cursor-pointer p-2 sm:p-2 w-[3rem] m-3 flex justify-center">
                <AiFillLinkedin size={25} />
              </div>
              <div className="rounded-full shadow-xl shadow-gray-400 cursor-pointer p-2 sm:p-2 w-[3rem] m-3 flex justify-center">
                <AiOutlineMail size={25} />
              </div>
              <div className="rounded-full shadow-xl shadow-gray-400 cursor-pointer p-2 sm:p-2 w-[3rem] m-3 flex justify-center">
                <AiFillTwitterCircle size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
