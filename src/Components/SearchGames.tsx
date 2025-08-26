import { useEffect, useState } from "react"
import apiKey from '../../public/apiKey'
import type { IGame } from '../interface' 
import EachSearchResult from "./EachSearchResult"
export function SearchGames() {
    const [searchedGames, setSearchedGames] = useState<IGame[]>([])
    const [sort, setSort] = useState('computed_rating')
  

    
    useEffect(() => {
        const params = new URLSearchParams(
            {
                'sort': sort,
                'sort-order': 'desc'
            })
        
        
        let isReq = false
       const gamesSearchedAPICall = () => fetch(`https://api.gamebrain.co/v1/games?${params}`, {
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
           .then(data => { if (!isReq) setSearchedGames(data.results) })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
        gamesSearchedAPICall()

        return () => { isReq = true }
    }, [sort])

  




    if (searchedGames.length !== 0) {
        return (
            <>
                <div><label>Sort By: </label>
                    <select onChange={(e) => setSort(e.target.value)}>
                        <option value='computed_rating'> Computed Rating</option>
                        <option value='release_date'> Release Date</option>
                        <option value='price'>Price</option>
                    </select>
               </div>
        <ul>
                    {searchedGames.map((eachGame) => (
                        <EachSearchResult game={eachGame} key={eachGame.id}/>    
                    ))}
                </ul>
                </>
        )
    } else {
        return (
            <h1>Loading...</h1>
        )
    }
}