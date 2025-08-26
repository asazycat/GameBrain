import { useEffect, useState } from "react"
import apiKey from "../../public/apiKey";




export default function SimilarGames({ id }: { id: string }) {
    const [similarGames, setSimilarGames] = useState([])
    useEffect(() => {
            let isReq = false
       const similarGamesAPI = () => fetch(`https://api.gamebrain.co/v1/games/:id`, {
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
        <h1>{id }</h1>
    )
}