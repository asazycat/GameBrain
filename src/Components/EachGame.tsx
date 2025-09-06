import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import apiKey from "../../public/apiKey"

import type { IGame } from "../interface"
import Rating from "./Rating"
import SimilarGames from "./SimilarGames"
import FavouriteButton from "./FavouriteButton"
// import SimilarGames from "./SimilarGames"


export default function EachGame() {
    const { id } = useParams()
    const [game, setGame] = useState<IGame>({
  id: 0,
  name: '',
  image: '',
  gameplay: '',
  link: '',
  x_url: '',
  rating: {
    mean: 0,
    count: 0,
    mean_players: 0,
    count_players: 0,
    mean_critics: 0,
    count_critics: 0
  },
  description: '',
  short_description: '',
  release_date: '',
  developer: '',
  playtime: {
    percentiles: [],
    min: 0,
    median: 0,
    max: 0,
    mean: 0,
    mentions: 0
  },
  platforms: [],
  tags: [],
  genres: [],
  genre: '',
  themes: [],
  adult_only: false,
  play_modes: [],
  screenshots: [],
  videos: [],
  offers: [],
  official_stores: [],
  micro_trailer: ''
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

    return (<>
        <div className="border-2 m-auto w-5/6 flex p-2 justify-around mt-5 rounded-2xl bg-[#284246] border-[#284246] text-center">
            <ul className={`${game.tags.length === 0 ? 'm-auto' : ''}`}>{game.genres.map((eachGenre) => <li className="mt-2 border-2 bg-[#77858f] text-[#d2eb47] border-[#77858f] rounded-3xl p-1">{eachGenre.name}</li>)}</ul>
            <ul className="">{game.tags.map((tag) => <li className=" mt-2 border-2 bg-[#77858f] text-[#d2eb47] border-[#77858f] rounded-3xl p-1">{tag.name}</li>) }</ul>
        </div>    
        
        <div className=" m-auto mt-5 flex border-double  text-center w-3/4 justify-around text-white">
            <h1 className="text-sm">{game.developer}</h1>
            <p className="text-sm"> ( Release: {game.release_date } )</p>
        </div>

        <div className="flex w-9/10  m-auto p-5 mt-2 bg-[#284246] border-[#284246] rounded">
            <img src={`${game.image}`} alt={`${game.name}`} className="size-40" />
            <div className=" bg-[#284246] border-[#284246] p-2 rounded-sm ">
                <h1 className="text-sm text-white ">{game.name}</h1>
                <ul className="text-[#d2eb47]">{game.themes.map((theme) => <li>{theme.name}</li>)}</ul>
                <ul className="text-[#d2eb47]">{game.play_modes.map((play_mode) => <li>{play_mode.name}</li>)}</ul>
                <FavouriteButton id={id ?? ''} />
            </div>
            
        </div>

        <div className=" w-9/10 m-auto mt-5 p-2 text-white bg-[#284246] border-[#284246] rounded">
             <ul  className="flex flex-row:w-full  overflow-scroll border-[#284246] mt-5 mb-5">
                {game.screenshots.map((eachScreenshot,index) => ( <li key={index}>
                    <img src={`${eachScreenshot}`} alt={`${game.name} screenshot `} className="size-50 max-w-none m-2" />
                    </li>
                ))}
            </ul>
            <p className="p-5">{game.description}</p>
            <video src={`${game.micro_trailer}`} controls >Video not supported on this browser</video>
            <div className="mt-5"> <Rating rating={game.rating} /></div>
        </div>

         <SimilarGames id={id  ?? '' } />
        </>
    )
}