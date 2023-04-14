import Image from "next/image";
// import Logo from "./images/Logo.jpg";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="bg-[#433A33] w-full fixed h-20 z-[100] ">
          <div className="flex items-center w-full justify-between h-full px-10">
            <div className=" bg-red-400 font-bold">
              <Image
                src="/./images/Logo.jpg"
                width="80"
                height="10"
                alt="No image"
              />
            </div>
            <div className="w-auto cursor-pointer ">
              <ul className="flex space-x-11 text-white">
                <li>Home</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
