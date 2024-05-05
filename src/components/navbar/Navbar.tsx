import  logo  from "../../constant/s.jpg"
 import { navLinksdata } from "../../constant"
 import {Link} from "react-scroll"
export default function Navbar() {
  return (
    <div className="w-full  sticky top-0 z-50 bg-bodyColor h-24 flex justify-between items-center font-titleFont border-b-[1px] border-gray-600">
        <div><img src={logo} alt="Logo" className="w-10 h-10 rounded-full" /></div>
        <div>
            <ul className="flex items-center gap-10">
                {navLinksdata.map((navlink)=>(
                    <li key={navlink._id}   className="text-base font-normal text-gray-400 tracking-wide
                     cursor-pointer hover:text-designColor duration-300  "
                    >
                    <Link
                     activeClass="active"
                     to={navlink.link}
                     spy={true}
                     smooth={true}
                     offset={-70}
                     duration={500}
                    >
                    {navlink.title}
                    </Link></li>
                ))}
            </ul>
        </div>
        
    </div>
  )
}
