
import { useContext, useState } from "react"
import { UserContextProvider } from "../Contexts/UserContextProvider"
import { redirect } from "react-router-dom"



export default function Profile() {
   
    const user = useContext(UserContextProvider)
    const [menu, setMenu] = useState(false)
    if (user.name !== undefined) {
       return (
         <>
            <div className="flex flex-row bg-[#1c2b2d]  justify-between" >
                 <div className="text-white font-extrabold mr-10 max-sm:hidden">
                   <h1>{user?.name}</h1>
                       <p onClick={() => setMenu(true)} className={`hover:text-[#d2eb47] ${menu ? 'text-[#d2eb47]' : ''}`}>Profile</p>
                       </div>  
                   <img src={`${user?.avatar_urls['48']}`} className=" max-sm:hidden rounded-3xl" />
                   <img src={`${user?.avatar_urls['48']}`} className="min-sm:hidden rounded-3xl"  onClick={() => setMenu(!menu)}/>
                
            </div>
                <div className={`${menu ? `flex` : `hidden`} flex-col absolute max-sm:bg-[#1c2b2d]   bg-[#1c2b2d] mt-2 text-white p-2`} onMouseEnter={() => setMenu(true)} onMouseLeave={() => setMenu(false)}>
                    <button className="hover:text-[#d2eb47] ">View Profile</button>
                    <button onClick={() => { localStorage.removeItem('tokenObj'); redirect('/'); /*window.location.reload()*/;}} className="hover:text-[#d2eb47]">Logout</button>
                </div>
                </>
        )
    }
}