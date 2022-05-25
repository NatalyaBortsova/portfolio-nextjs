import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bortsova | Front-End Developer</title>
        <meta name="keywords" />
        <meta name="description" content="Portfilio of Natalya Bortsova's projects, Front-End Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
