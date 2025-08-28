import { useEffect, useState } from "react"
import type { IGame } from "../interface"
import apiKey from "../../public/apiKey"
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
    
    console.log(suggestedGames)
    return (
         <>
            
                <label>Search</label><input type="text" onChange={e => setQuery(e.target.value)}></input>
         
         </>
       
     )
}