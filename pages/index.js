import Image from "next/image";
import { Navbar, Footer, Main, Skills, Project } from "@/components";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  useEffect(() => {}, [router.asPath]);
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
