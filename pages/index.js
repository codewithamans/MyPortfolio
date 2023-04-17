import Image from "next/image";
import { Navbar, Footer, Main, Skills, Project } from "@/components";
export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Skills />
      <Project />
      <Footer />
    </>
  );
}
