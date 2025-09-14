import { useEffect, useState } from "react"
import type { IGame } from "../interface"
import apiKey from "../../public/apiKey"
import { Link } from "react-router-dom"
export default function SuggestGames() {
    const [query, setQuery] = useState('')
    const [suggestedGames, setSuggestedGames] = useState<IGame[]>([])
   
    useEffect(() => {
         const params = new URLSearchParams(
            {
                'query': query,
            })
            let isReq = false
      const  getSuggestedGamesAPI = () => fetch(`https://api.gamebrain.co/v1/games/suggestions?${params}`, {
    method: 'GET',
    headers: {
        'x-api-key': apiKey
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(data =>{ if (!isReq) setSuggestedGames(data.results) })
.catch(error => console.error('There was a problem with the fetch operation:', error));
   
        getSuggestedGamesAPI()
        return () => { isReq = true }
    }, [query])
    
    return (
         <div className=" p-2 text-xl bg-white border-solid min-sm:border-2 w-1/4 max-sm:mr-10">
            
                <label className="hidden">Search</label><input type="text" onChange={e => setQuery(e.target.value) } placeholder='search'></input>
            <ul className="absolute top-14 bg-white  max-sm:w-full  max-sm:left-0">
                {
                    suggestedGames.map((element) => <li className="p-4" key={element.id}><Link to={`games/${element.id}`} >{element.name}</Link></li>)
                }
             </ul>
         </div>
       
     )
}