
import { useContext, useState } from "react"
import { UserContextProvider } from "../Contexts/UserContextProvider"



export default function Profile() {

    const user = useContext(UserContextProvider)
    const [menu, setMenu] = useState(false)
    if (user.name !== undefined) {
       return (
         <>
            <div className="flex flex-row bg-[#1c2b2d]  justify-between" onClick={() => setMenu(true)}>
                 <div className="text-white font-extrabold mr-10 max-sm:hidden">
                   <h1>{user?.name}</h1>
                       <p>Profile</p>
                       </div>  
                <img src={`${user?.avatar_urls['48']}`} className="rounded-3xl"  onClick={() => setMenu(!menu)}/>
                
            </div>
                <div className={`${menu ? `flex` : `hidden`} flex-col absolute max-sm:bg-[#1c2b2d]   bg-[#1c2b2d] mt-2 text-white`} onMouseEnter={() => setMenu(true)} onMouseLeave={() => setMenu(false)}>
                    <button>View Profile</button>
                    <button onClick={() => { localStorage.removeItem('tokenObj'); window.location.reload();}}>Logout</button>
                </div>
                </>
        )
    }
}