import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import apiKey from "../../public/apiKey"
import SimilarGames from "./SimilarGames"
import type { IGame } from "../interface"


export default function EachGame() {
    const { id } = useParams()
    const [game, setGame] = useState<IGame>({
        id: 0,
    year: 0,
    name: '',
    genre: '',
    image: '',
    link: '',
    rating: {
                mean: 0,
                count: 0
            },
    adult_only: true,
    screenshots: [],
    micro_trailer: '',
    gameplay: '',
    short_description: ''
    })
    useEffect(() => {
       
        
        let isReq = false
       const gameDetail = () => fetch(`https://api.gamebrain.co/v1/games/${id}`, {
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
  console.log(document.URL)
console.log(game)
    return (<>
        {id}
        <h1>{game.name}</h1>
        <p>{game.short_description}</p>
        <img src={game.image } alt={game.name}/>
        <p></p>
        <div>
        <SimilarGames id={id ?? ''} />
        </div>
        </>)
}