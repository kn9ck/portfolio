import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeSwitch from "./ThemeSwitch";

export default function SocialLinks(){
    return <ul className="ml-1 mt-8 flex items-center dark:invert">
            <li className="mr-5 text-xs shrink-0"><Link href={'https://github.com/kn9ck'}><FaGithub style={{color:'black'}} size={25}/></Link></li>
            <li className="mr-5 text-xs shrink-0"><Link href={'https://www.linkedin.com/in/joseph-felix-4b8369211/'}><FaLinkedin style={{color:'black'}} size={25}/></Link></li>
            <li className="mr-5 text-xs shrink-0"><ThemeSwitch /></li>
    </ul>;
}
