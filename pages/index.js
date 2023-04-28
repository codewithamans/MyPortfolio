import Image from "next/image";
import { Navbar, Footer, Main, Skills, Project } from "@/components";
import { useEffect } from "react";

import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  // const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // const router = useRouter();
  // useEffect(() => {
  //   router.push(router.asPath);
  // }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <motion.div
          className="h-1 w-full origin-top-left  bg-green-400 fixed "
          style={{ scaleX }}
        />

        <Navbar />

        <Main />
        <Skills />
        <Project />
        <Footer />
      </motion.div>
    </>
  );
}
