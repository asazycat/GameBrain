import { useEffect, useState } from "react"
import apiKey from '../../public/apiKey'
import type { IGame } from '../interface' 
import EachSearchResult from "./EachSearchResult"
export function SearchGames() {
    const [searchedGames, setSearchedGames] = useState<IGame[]>([])
    const [sort, setSort] = useState('computed_rating')
    const [pagination, setPagination] = useState(0);

    
    useEffect(() => {
        const params = new URLSearchParams(
            {
                'offset': pagination.toString(),
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
    }, [pagination, sort])

  

    const handlePagination = (e: React.MouseEvent<HTMLElement>) => {
        console.log(pagination)
        if ((e.target as HTMLInputElement).innerText === 'Next Page') { 
            setPagination(pagination + 1)
        } else {
           setPagination(pagination - 1)
       }
      
    }


    if (searchedGames.length !== 0) {
        return (
            <>
                <div className="border-2 bg-[#1C2B2D] text-white border-[#1c2b2d] p-3">
                    <label>Sort By: </label>
                    <select onChange={(e) => setSort(e.target.value)}>
                        <option value='computed_rating'> Computed Rating</option>
                        <option value='release_date'> Release Date</option>
                        <option value='price'>Price</option>
                    </select>
               </div>
                <ul className="max-sm:grid max-sm:gap-10  min-sm:grid min-sm:grid-cols-4 m-10  min-sm:m-auto min-sm:mt-5 ">
                    {searchedGames.map((eachGame) => (
                        <EachSearchResult game={eachGame} key={eachGame.id}/>    
                    ))}
                </ul>
                <div className="flex flex-row-reverse justify-around text-white text-2sm  mb-3  ml-auto mr-auto p-2 border-underline border-b-1 w-2/3">
                    <button onClick={handlePagination}>Next Page</button>
                    <button onClick={handlePagination}>Previous Page</button>
                </div>
            </>
        )
    } else {
        return (
            <h1>Loading...</h1>
        )
    }
}