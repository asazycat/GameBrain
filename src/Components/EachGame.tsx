import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import apiKey from "../../public/apiKey"
import SimilarGames from "./SimilarGames"
import type { IGame } from "../interface"
import Rating from "./Rating"


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

    return (
        <div className="max-sm:flex max-sm:flex-col-reverse mt-5">
            <div className="border-[#284246] bg-[#284246] text-white font-mono ">   
                <h1 className="max-sm:text-2xl max-sm:p-5 max-sm:text-center">{game.name}</h1>
                <p className="max-sm:p-2 flex">{(game.rating.mean * 5).toFixed(2) } <Rating rating={game.rating} /> </p>
                <p className="">{game.short_description}</p>
            </div>
            <div className="max-sm:flex max-sm:flex-col mt-5">
                <img src={game.image} alt={game.name} className="max-sm:h-[25em] max-sm:w-full"/>
                 
                <SimilarGames id={id ?? ''} />
            </div>
        
       
        </div>)
}