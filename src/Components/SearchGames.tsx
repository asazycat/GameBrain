import { useCallback, useEffect, useState } from "react"
import apiKey from '../../public/apiKey'
import type { IGame } from '../interface' 
import EachSearchResult from "./EachSearchResult"

export function SearchGames() {
    const [searchedGames, setSearchedGames] = useState<IGame[]>([])
    const [sort, setSort] = useState('computed_rating')
    const [pagination, setPagination] = useState(1);
  
    
    useEffect(() => {
        const params = new URLSearchParams(
            {
                'offset': pagination.toString(),
                'sort': sort,
                'sort-order': 'desc',
                'filters': `[   {"key": "review_rating", "values": []},{"key": "release_date", "values": []},{"key": "platform", "values": []},
                                {"key": "genre", "values": []},
                                {"key": "theme", "values": []},
                                {"key": "play_mode", "values": []},
                                {"key": "content_rating_normalized", "values": []},
                                {"key": "input_mode", "values": []},
                                {"key": "price", "values": []},
                                {"key": "tag", "values": []},
                                {"key": "feature", "values": []}
                            ]`
            })
        
        const url = `https://api.gamebrain.co/v1/games?${params}`;
        console.log(url)
        let isReq = false
       const gamesSearchedAPICall = () => fetch(url, {
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
        .catch(error => alert(`${error.message}, ${error.code}`));
        gamesSearchedAPICall()

        return () => { isReq = true }
    }, [pagination, sort])

  

    const handlePagination = useCallback((e: React.MouseEvent<HTMLElement>) => {
        if ((e.target as HTMLInputElement).innerText === 'Next Page') { 
            setSearchedGames([])
            setPagination(pagination + 1)
        } else {
            if (pagination > 1) {
                 setSearchedGames([])
                setPagination(pagination - 1)
                }
        }
      
    },[pagination])


    if (searchedGames.length !== 0) {
        return (
            <>
                <div className="border-2 bg-[#1c2b2d] text-white border-[#1c2b2d] mt-5 p-3 min-sm:w-9/10 min-sm:m-auto min-sm:mt-5 min-sm:rounded-2xl">
                    <label>Sort By: </label>
                    <select onChange={(e) => setSort(e.target.value)} >
                        <option value='computed_rating' className="text-black"> Computed Rating</option>
                        <option value='release_date' className="text-black"> Release Date</option>
                        <option value='price' className="text-black">Price</option>
                    </select>
               </div>
                <ul className="grid gap-10  min-sm:grid min-sm:grid-cols-5 m-10  min-sm:m-auto min-sm:mt-5 min-sm:w-9/10 min-sm:h-1/2">
                    {(searchedGames).map((eachGame) => (
                        <EachSearchResult game={eachGame} key={eachGame.id} />    
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