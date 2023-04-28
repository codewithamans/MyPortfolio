import { Navbar, Project, Footer } from "@/components";
import { motion } from "framer-motion";

const project = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
        exit={{ opacity: 1 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, ease: "easeIn", delay: 0.5 },
          }}
        >
          <Navbar />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, ease: "easeIn", delay: 1 },
          }}
        >
          <Project />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, ease: "easeIn", delay: 1.5 },
          }}
        >
          <Footer />
        </motion.div>
      </motion.div>
    </>
  );
};

export default project;
