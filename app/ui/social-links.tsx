import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialLinks(){
    return <ul className="ml-1 mt-8 flex items-center invert">
            <li className="mr-5 text-xs shrink-0"><Link href={'https://github.com/kn9ck'}><FaGithub size={25}/></Link></li>
            <li className="mr-5 text-xs shrink-0"><Link href={'https://www.linkedin.com/in/joseph-felix-4b8369211/'}><FaLinkedin size={25}/></Link></li>
    </ul>;
}