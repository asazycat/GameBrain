import { useState, useContext } from "react"
import { LoginContextProvider } from "../Contexts/LoginContextProvider"
import { UserContextProvider } from "../Contexts/UserContextProvider"
import localSiteDemo from "../../public/localSiteDemo"


export default function FavouriteButton({id}: {id: string}) {
    
    const tokenObj = useContext(LoginContextProvider)
    const user = useContext(UserContextProvider)
     const [isFav, setIsFav] = useState(user.favourite_games.includes(id))
    const handleUpdateFavouriteGames = async () => {
       
        if (!user.favourite_games.includes(id)) {
            const updatedFavourites = [...user.favourite_games, id]
            user.favourite_games = updatedFavourites
            await fetch(`${localSiteDemo}/wp/v2/users/me`, {
                method: `POST`, headers: { "Content-Type": "application/json", Authorization: `Bearer ${tokenObj.token}` }, body: JSON.stringify({
                    favourite_games: updatedFavourites,
                })
            }).then((res) => res.json()).then((res) => { console.log(res);  setIsFav(true)}).catch((err) => alert(err.message))
        } else {
           const updatedFavourites = user.favourite_games.filter((eachId) => eachId !== id)
            user.favourite_games = updatedFavourites
            await fetch(`${localSiteDemo}/wp/v2/users/me`, {
                method: `POST`, headers: { "Content-Type": "application/json", Authorization: `Bearer ${tokenObj.token}` }, body: JSON.stringify({
                    favourite_games:  updatedFavourites,
                })
            }).then((res) => res.json()).then((res) => { console.log(res);  setIsFav(false)}).catch((err) => alert(err.message))
    }
}

    return (
        <button className="bg-[#77858f] text-[#d2eb47] border-[#77858f] mt-2 p-2 rounded min-w-30" onClick={handleUpdateFavouriteGames}>{isFav ? 'Unfavourite' : 'Favourite'} </button>
    )
}