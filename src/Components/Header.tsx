


import { useContext } from "react";
import Navigation from "./Navigation";
import Profile from "./Profile";
import SuggestGames from "./SuggestGames";
import { LoginContextProvider } from "../Contexts/LoginContextProvider";

export default function Header() {

    const login = useContext(LoginContextProvider)
    console.log(login)
    return (
        <header className="flex flex-row justify-between  p-2 bg-[#1c2b2d] max-sm:h-full max-sm:bg-[#1c2b2d] ">
            <Navigation />
            <SuggestGames/>
           
            <div className=" text-left size-fit">
                 <Profile />
            </div>
        </header>
    )
}