
import { useContext } from "react"
import { UserContextProvider } from "../Contexts/UserContextProvider"
import { useNavigate } from "react-router-dom"

export default function Profile() {

    const user = useContext(UserContextProvider)
     const navigate = useNavigate() 
    if (user.name !== undefined) {
        return (
         
            <div className="flex flex-row max-sm:bg-[#1c2b2d]   bg-[#284246] ">
                <h1 className="text-white font-extrabold" onClick={() => navigate(`/users/${user.id}`)}>{user?.name}</h1>
                <img src={`${user?.avatar_urls['48']}`} className="rounded-3xl" />
                </div>
         
        )
    }
}