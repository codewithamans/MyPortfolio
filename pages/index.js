import Image from "next/image";
import { Navbar, Footer, Main, Skills, Project } from "@/components";
import { useEffect } from "react";

import { motion, useScroll, useSpring } from "framer-motion";
import AOS from "aos";

import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 80,
    });
  }, []);
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });

  // const router = useRouter();
  // useEffect(() => {
  //   router.push(router.asPath);
  // }, []);
  return (
    <>
      {/* <motion.div
        className="h-1 w-full origin-top-left  bg-green-400 fixed "
        style={{ scaleX }}
      /> */}
      {/* <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        // exit={{ opacity: 1 }}
      > */}

      <div data-aos="fade-down" data-aos-duration="1500">
        <Navbar />
      </div>

      <Main />

      <Skills />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5, ease: "easeIn", delay: 2.5 },
        }}
      >
        <Footer />
      </motion.div>
      {/* <motion.Main initial={{ x: "-100%" }} animate={{ x: "0%" }} /> */}
    </>
  );
}
