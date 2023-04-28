import { Navbar, About, Footer } from "@/components";
import { motion } from "framer-motion";

const about = () => {
  return (
    <>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.5, ease: "linear" }}
        exit={{ opacity: 1 }}
      >
        <Navbar />
        <About />
        <Footer />
      </motion.div>
    </>
  );
};

export default about;
