


import Navigation from "./Navigation";
import Profile from "./Profile";
export default function Header() {
     
    return (
        <header className="flex justify-between p-2 bg-[#284246] max-sm:h-full max-sm:bg-[#1c2b2d] ">
            <Navigation/>
            <div className=" text-left size-fit">
            <Profile/>
            </div>
            </header>
    )
}