import { useEffect, useState } from "react"
import apiKey from "../../public/apiKey";
import type { IGame } from "../interface";




export default function SimilarGames({ id }: { id: string }) {
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

    console.log(similarGames)
    
    return (
        <h1>{similarGames.map((similarGame) => (<li>{similarGame.name}</li>)) }</h1>
    )
}