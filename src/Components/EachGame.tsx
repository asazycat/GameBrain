import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import apiKey from "../../public/apiKey"
import SimilarGames from "./SimilarGames"


export default function EachGame() {
    const { id } = useParams() 
    const [game, setGame] = useState({})
    useEffect(() => {
          let isReq = false
       const gameDetail = () => fetch(`https://api.gamebrain.co/v1/games/:id`, {
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
           .then(data => { if (!isReq) setGame(data) })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
        gameDetail()

        return () => { isReq = true }
}, [id]) 

console.log(game)
    return (<>
        {id}
        <SimilarGames id={id ?? ''} />
    
        </>)
}