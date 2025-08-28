import { useState } from "react";
import  { Link } from "react-router-dom";

export default function Navigation() {
       const [burger, setBurger] = useState(false)
    return (
        <nav className=''>
            <button className={`max-sm: block  bg-gray-800 w-full p-2 min-sm:hidden`} onClick={() => setBurger(!burger)}><p className="border-2 mt-1 w-8"></p><p className="border-2 mt-1 w-8"></p><p className="border-2 mt-1 w-8"></p></button>
            <ul className={`border-2 justify-around ${ burger ?  'flex-col  ' : 'hidden min-sm:flex min-sm:flex-row'} max-sm:absolute max-sm:w-full max-sm:h-full bg-gray-800`}>
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`/games`}>Games</Link></li>
                        <li><Link to={`/genres`}>Genres</Link></li>
                    </ul>
                </nav>
    )
}