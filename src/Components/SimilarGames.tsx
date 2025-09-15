import { useEffect, useState } from "react"
import apiKey from "../../public/apiKey";
import type { IGame } from "../interface";
import { Link } from "react-router-dom";



export default function SimilarGames({ id }: { id: string }) {
    // const [slide, setSlide] = useState(false)
    const [similarGames, setSimilarGames] = useState<IGame[]>([])
    useEffect(() => {
            let isReq = false
       const similarGamesAPI = () => fetch(`https://api.gamebrain.co/v1/games/${id}/similar`, {
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
           .then(data => { if (!isReq) setSimilarGames(data.results) })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
        similarGamesAPI()

        return () => { isReq = true }
    }, [id])

  
    
    return (<>
        <h1 className="text-sm text-white min-sm:text-2xl w-9/10 m-auto text-center">Similar Games To Check Out</h1>
        <ul  className="w-9/10 bg-[#1c2b2d] border-[#1c2b2d] flex flex-row overflow-scroll m-auto  min-sm:grid min-sm:grid-cols-5 mt-2 min-sm:overflow-x-hidden min-sm:overflow-y-hidden">
            {similarGames.map((similarGame) => (

                <li key={similarGame.id} className="min-sm:m-auto ">
                    <Link to={`/games/${similarGame.id}`}>
                <img src={`${similarGame.image}`} alt={similarGame.name} className="size-50 max-w-none m-2 border-1 border-[black]  min-sm:rounded-2xl min-sm:m-2"/>
        </Link>
            </li>
            ))}</ul>
        </>
    )
}