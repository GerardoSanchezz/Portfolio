import { Principal } from "@/components/Principal";
import { Projects } from "@/components/Projects";
import { First } from "@/components/First";
import { Footer } from "@/components/Footer/";
import { Header } from "@/components/Header";
import { Curriculum } from "@/components/Curriculum";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <First />
      <Principal />
      <Projects />
      <Skills />
      <Curriculum />
      <Footer />
    </>
  );
}
