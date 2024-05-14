import Image from "next/image";
import NavBar from "./ui/navbar";
import SocialLinks from "./ui/social-links";
import bg from '../public/lata.png';
import About from "./ui/sections/about";
import Projects from "./ui/sections/projects";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">Joseph Felix</h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-black sm:text-xl">Software Developer</h2>
            <p className="mt-4 max-w-xs leading-normal text-black">Current student at Arizona State University studying Computer Science. Looking to gain more experience and exposure to working in a team environment.</p>
            <NavBar />
          </div>
          <SocialLinks />
        </header>
      <main className="pt-24 lg:w-1/2 lg:py-24">
        <About />
        <Projects />
      </main>
      </div>
    </div>
  );
}
