import Link from "next/link";
import Image from "next/image";

export default function NavBar(){
  return <div className="bg-black bg-cover flex justify-between items-center h-24  mx-auto px-4 text-white sticky top-0">
    <h1 className="w-full text-3xl font-bold">Joseph Felix</h1>
    <ul className="flex justify-between items-center">
      <li className="p-4 flex max-h-10 items-center"><Link href="#about-section" scroll={false} >About</Link></li>
      <li className="p-4 flex max-h-10 items-center"><Link href="#lata" >Skills</Link></li>
      <li className="p-4 flex max-h-10 items-center"><Link href="#projects-section" >Projects</Link></li>
      <li className="p-4 flex max-h-10 items-center"><Link href="#education-section" >Education</Link></li>
    </ul>
  </div>;
}
