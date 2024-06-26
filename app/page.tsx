import Image from "next/image";
import NavBar from "./ui/navbar";
import SocialLinks from "./ui/social-links";
import About from "./ui/sections/about";
import Projects from "./ui/sections/projects";
import Education from "./ui/sections/education";
import ThemeSwitch from "./ui/ThemeSwitch";

export default function Home() {
  return (
    <div className="text-black dark:text-white  min-h-screen mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-8 ">
        <header className="rounded-md lg:bg-slate-100 dark:lg:bg-zinc-950 lg:sticky lg:top-8 lg:bottom-15 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-20 lg:pl-14 lg:mt-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight  sm:text-5xl">Joseph Felix</h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">Software Developer</h2>
            <p className="mt-4 max-w-xs leading-normal">Current student at Arizona State University studying Computer Science. Looking to gain more experience and exposure to working in a team environment.</p>
            <NavBar />
          </div>
          <SocialLinks />
        </header>
      <main className="pt-24 lg:w-1/2 lg:py-24">
        <About />
        <Education />
        <Projects />
      </main>
      </div>
    </div>
  );
}
