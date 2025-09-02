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

  
    
    return (
        <ul  className="flex flex-row w-full overflow-scroll m-auto ">
            {similarGames.map((similarGame) => (

                <li key={similarGame.id}>
                    <Link to={`/games/${similarGame.id}`}>
                <img src={`${similarGame.image}`} alt={similarGame.name} className="size-50 max-w-none m-2"/>
        </Link>
            </li>
            ))}</ul>
    )
}