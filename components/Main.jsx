import { motion } from "framer-motion";
import Image from "next/image";
import { HiExternalLink } from "react-icons/hi";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineMail,
} from "react-icons/ai";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Main = () => {
  const data = {
    main_desc:
      " I'm a front-end developer who loves to build cool things.Currently, I am focusing on upgrading the skills of front-end while learning blockchain technology.I am looking for better opportunities to enhance my skills and knowledge. I am always ready to learn new tech stack .",
    about_desc:
      " Hello My name is Aman Singh. I'm a M.Sc graduate who loves to build cool stuffs in free time.Coding isn't just a job for me - it's a passion. With an insatiable hunger for new challenges and a love for pushing the boundaries of what's possible, I'm always on the cutting edge of the latest trends in tech.  I am self taught programmer.Whether it's building an app from scratch or optimizing an existing system, I thrive on pushing the boundaries of what's possible. So if you're looking for a developer who knows their code inside and out, look no further - I'm your tech-savvy superhero!",
  };
  return (
    <>
      <div className="w-full  mt-10 h-auto   flex justify-center">
        <div className="w-3/5   flex justify-center ">
          <div>
            <div className="flex justify-center mb-2">
              <Image
                className=" rounded-full animate-bounce  shadow-xl shadow-gray-500"
                src="/./images/aman.jpg"
                width="200"
                height="200"
              />
            </div>
            <div className="font-extrabold font-Dongle   text-center  text-4xl md:text-6xl lg:text-8xl">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hi I am ")
                    .typeString(
                      "<span class='font-Dancing  mx-2 sm:mx-3 md:mx-4 lg:mx-5 text-[#6E07F3]' > Aman</span> "
                    )
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Hire Me !  I am open to work")
                    .pauseFor(1000)
                    .deleteAll()
                    .start();
                }}
              />
            </div>
            {/* <div className="font-extrabold text-center font-Dongle text-3xl md:text-5xl lg:text-6xl">
              A Frontend And Aspiring Blockchain Developer
            </div> */}
            <div className="text-center italic font-Dongle font-medium text-sm md:text-lg lg:text-2xl">
              {data.main_desc}
            </div>
            <div className="text-center font-Dongle font-medium text-2xl md:text-3xl lg:text-4xl">
              Connect With Me, Let's Build Together
            </div>
            <div className="flex text justify-center">
              <div className="hover:scale-125 h-auto ease-in duration-100 rounded-full shadow-xl shadow-gray-200 cursor-pointer p-2 sm:p-2 w-[3rem] m-3 flex justify-center">
                <AiFillGithub size={25} />
              </div>
              <div className="hover:scale-125 h-auto ease-in duration-100 rounded-full shadow-xl shadow-gray-200 cursor-pointer p-2 sm:p-2 w-[3rem] m-3 flex justify-center">
                <AiFillLinkedin color="#0077B5" size={25} />
              </div>
              <div className="hover:scale-125 h-auto ease-in duration-100 rounded-full shadow-xl shadow-gray-200 cursor-pointer p-2 sm:p-2 w-[3rem] m-3 flex justify-center">
                <AiOutlineMail color="#4285f4" size={25} />
              </div>
              <div className="hover:scale-125 h-auto ease-in duration-100 rounded-full shadow-xl shadow-gray-200 cursor-pointer p-2 sm:p-2 w-[3rem] m-3 flex justify-center">
                <AiFillTwitterCircle color="00ACEE" size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  mt-8 lg:mt-32 h-auto  flex justify-center">
        <div className="w-4/5  ">
          <div className="text-purple-600  tracking-wider font-Dongle font-bold text-3xl  md:text-4xl lg:text-7xl underline-offset-4">
            ABOUT ME
          </div>
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <p className="font-Dongle font-medium text-lg md:text-2xl lg:text-4xl m-2 italic ">
                {data.about_desc}
              </p>
              <div className="md:flex gap-8 mt-8">
                <Link
                  href="/about"
                  class="px-6 w-[10rem] py-3 button relative rounded-full group overflow-hidden font-medium bg-purple-50 text-purple-600 flex items-center justify-center"
                >
                  <span class="absolute bottom-0 left-0 flex w-full  h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                  <button class="relative  group-hover:text-white">
                    MORE INFO
                  </button>
                </Link>

                <a href="/./Resume.pdf" download>
                  <button className="px-6 font-Open_sans  font-semibold tracking-wider   uppercase border-2    mt-6 md:mt-1 text-white flex gap-3 items-center rounded-full  bg-black py-3">
                    Resume
                    <HiExternalLink className="-mt-1" size={30} />
                  </button>
                </a>
              </div>
            </div>
            <div className="hidden lg:block   mx-4">
              <Image src="/./images/avtar2.png" width="600" height="600" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
