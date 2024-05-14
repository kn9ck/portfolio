import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return <nav className="nav hidden lg:block text-black">
      <ul className="mt-16 w-max">
        <li ><Link className="group flex items-center py-3" href="#about" >About</Link></li>
        <li ><Link className="group flex items-center py-3" href="#projects" >Projects</Link></li>
        <li ><Link className="group flex items-center py-3" href="#education" >Education</Link></li>
      </ul>
  </nav>;
}
