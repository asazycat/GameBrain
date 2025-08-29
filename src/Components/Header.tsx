
import SuggestGames from "./SuggestGames";

import Navigation from "./Navigation";
export default function Header() {
     
    return (
        <header className="flex justify-between ">
            <Navigation/>
            <div className=" text-left size-fit">
                <SuggestGames/>
            </div>
            </header>
    )
}