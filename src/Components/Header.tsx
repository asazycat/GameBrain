import  { Link } from "react-router-dom";
import SuggestGames from "./SuggestGames";

export default function Header() {
    return (
        <header className="border-red-500">
            <div className=""><h1>BrainGame</h1></div>
                <nav className="">
                    <div><Link to={`/`}>Home</Link></div>
                    <div><Link to={`/games`}>Games</Link></div>
                    <div><Link to={`/genres`}>Genres</Link></div>
                </nav>
                <div>
                    <SuggestGames/>
                </div>
            </header>
    )
}