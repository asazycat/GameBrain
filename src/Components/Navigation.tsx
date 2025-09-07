import { useState } from "react";
import  { Link } from "react-router-dom";

export default function Navigation() {
    const [burger, setBurger] = useState(false)
    
    return (
        <nav className='w-screen '>
            <button className={`border-[#293f42] border-2 border-solid text-[#3887a3] max-sm: block  bg-[#1c2b2d] max-sm:border-[#1C2B2D] w-full p-2 min-sm:hidden `} onClick={() => setBurger(!burger)}><p className="border-2 mt-1 w-8 text-xl"></p><p className="border-2 mt-1 w-8 text-xl"></p><p className="border-2 mt-1 w-8 text-xl"></p></button>
            <ul className={`border-[#293f42] border-2 p-2 justify-around ${ burger ?  ' min-sm:flex' : 'hidden min-sm:flex min-sm:flex-row'} max-sm:absolute max-sm:w-full max-sm:h-full bg-[#293f42] max-sm: text-left  text-[#3887a3] font-mono text-xl `}>
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`/games`}>Games</Link></li>
                        <li><Link to={`/articles`}>Articles</Link></li>
                    </ul>
                </nav>
    )
}