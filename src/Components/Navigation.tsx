import { useState } from "react";
import  { Link } from "react-router-dom";

export default function Navigation() {
    const [burger, setBurger] = useState(false)
    
    return (
        <nav className='w-1/2 max-sm:w-1/3'>
            <button className={`border-[#1c2b2d] border-2 border-solid text-[#3887a3] max-sm:block  bg-[#1c2b2d] max-sm:border-[#1C2B2D] w-full p-2 min-sm:hidden `} onClick={() => setBurger(!burger)}><p className="border-2 mt-1 w-8 text-xl"></p><p className="border-2 mt-1 w-8 text-xl"></p><p className="border-2 mt-1 w-8 text-xl"></p></button>
            <ul className={`border-[#1c2b2d] border-2 p-2 justify-around ${ burger ?  ' min-sm:flex ' : 'hidden min-sm:flex min-sm:flex-row min-sm:w-full'} max-sm:absolute max-sm:w-full max-sm:h-full bg-[#1c2b2d] max-sm:text-left max-sm:mt-3  max-sm:-ml-2  text-white font-mono text-xl `}>
                <li className="hover:text-[#d2eb47]"><Link to={`/`}>Home</Link></li>
                <li className="hover:text-[#d2eb47]"><Link to={`/games`}>Games</Link></li>
                <li className="hover:text-[#d2eb47]"><Link to={`/articles`}>Articles</Link></li>
                <li className="hover:text-[#d2eb47]"><Link to={`/users`}>Users</Link></li>
                    </ul>
                </nav>
    )
}