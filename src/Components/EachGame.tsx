import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import apiKey from "../../public/apiKey"
import type { IGame } from "../interface"
import Rating from "./Rating"
import SimilarGames from "./SimilarGames"
import FavouriteButton from "./FavouriteButton"



export default function EachGame() {
    const { id } = useParams()
    const videoControl = useRef<HTMLVideoElement>(document.createElement('video'))
    const [imgSize, setImageSize] = useState('')
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
       
        setImageSize('')
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
        <>
        
        
        <div className="border-2 m-auto w-5/6 flex p-2 justify-around mt-5 rounded-2xl bg-[#1c2b2d] border-[#1c2b2d] text-center min-sm:hidden">
            <ul className={`${game.tags.length === 0 ? 'm-auto' : ''} `}>{game.genres.map((eachGenre) => <li className="mt-2 border-2 bg-[#77858f] text-[#d2eb47] border-[#77858f] rounded-3xl p-1 ">{eachGenre.name}</li>)}</ul>
            <ul className="">{game.tags.map((tag) => <li className=" mt-2 border-2 bg-[#77858f] text-[#d2eb47] border-[#77858f] rounded-3xl p-1">{tag.name}</li>) }</ul>
        </div>    
        
        <div className=" m-auto mt-5 flex text-center w-3/4 justify-around text-white">
            <h1 className="text-sm">{game.developer}</h1>
            <p className="text-sm"> ( Release: {game.release_date } )</p>
        </div>

        <div className="flex w-9/10  m-auto p-5 mt-2 bg-[#1c2b2d] border-[#1c2b2d] rounded min-sm:m-auto min-sm:flex-col">
             
           
             
          
            <div className=" bg-[#1c2b2d] border-[#1c2b2d] p-2 w-full rounded-sm min-sm:flex min-sm:justify-around ">
                <div className="max-sm:flex flex-row justify-between max-sm:w-full">
                    <img src={`${game.image}`} alt={`${game.name}`} className="size-40 min-sm:size-75 m-auto" />
                    <div className="w-full text-center">
                        <h1 className="text-sm text-white min-sm:text-2xl">{game.name}</h1>
                         <div className="max-sm:hidden"><FavouriteButton id={id ?? ''}/></div>
                    <ul className=" text-[#d2eb47] min-sm:grid m-2 min-sm:grid-cols-3  ">{game.themes.map((theme) => <li>{theme.name}</li>)}</ul>
                        <ul className="text-[#d2eb47] min-sm:grid m-2 min-sm:grid-cols-3 ">{game.play_modes.map((play_mode) => <li>{play_mode.name}</li>)}</ul>
                        <div className="min-sm:hidden"><FavouriteButton id={id ?? ''}/></div>
                         <ul className={`${game.tags.length === 0 ? 'm-auto' : ''} flex  max-sm:hidden `}>{game.genres.map((eachGenre) => <li className="mt-2 ml-2 border-2 bg-[#77858f] text-[#d2eb47] border-[#77858f] rounded-3xl p-1 ">{eachGenre.name}</li>)}</ul>
                        <ul className="flex p-2">{game.tags.map((tag) => <li className="mt-2 ml-2 border-2 bg-[#77858f] text-[#d2eb47] border-[#77858f] rounded-3xl p-1 flex max-sm:hidden ">{tag.name}</li>) }</ul>
                    </div>
                </div>
                <div className="max-sm:hidden w-1/2">
                        <video src={`${game.micro_trailer}`} ref={videoControl} className="w-full  border-2 text-center">Video not supported on this browser</video>
                     <p className="text-white  overflow-y-scroll h-1/2 min-sm:overflow-y-hidden ">{game.description}</p>
                </div>
                
            </div>
                <div className="max-sm:hidden text-white mt-5 w-1/3"> <Rating rating={game.rating} /></div>
            
          
        </div>

        <div className=" w-9/10 m-auto mt-5  pt-2 text-white bg-[#1c2b2d] border-[#1c2b2d] rounded min-sm:p-0 min-sm:flex min-sm:flex-col-reverse">
             <ul  className="flex flex-row:w-full  overflow-scroll border-[#1c2b2d] mt-5 mb-5 min-sm:grid min-sm:grid-cols-3 min-sm:overflow-hidden min-sm:m-auto min-md:w-full min-md:grid-cols-4">
                <div className={`bg-[#000000b3] ${imgSize.length === 0 ? `hidden ${videoControl.current.controls = true}` : ` absolute w-9/10 min-sm:h-119/100 min-sm:w-9/10 ${videoControl.current.controls = false}`} `}>
                    <div className="m-auto h-full min-sm:flex flex-col m-auto justify-center">
                        <button className=" text-[1em] text-right" onClick={() => {setImageSize('')}}>X</button>
                        <img src={imgSize} className='m-auto size-100'/> 
                    </div>    
                </div>

                {game.screenshots.map((eachScreenshot,index) => ( <li key={index} className="m-auto w-9/10"> 
                    <img src={`${eachScreenshot}`} alt={`${game.name} screenshot `} className=' size-50 max-w-none border-1 border-[black]  min-sm:w-full min-sm:rounded-2xl min-sm:m-2' onClick={() => {setImageSize(eachScreenshot)}}/>
                    </li>
                ))}
            </ul>
            <p className="p-5 min-sm:hidden ">{game.description}</p>
            <video src={`${game.micro_trailer}`} ref={videoControl} className="min-sm:hidden">Video not supported on this browser</video>
            <div className="mt-5 min-sm:hidden"> <Rating rating={game.rating} /></div>
        </div>

         <SimilarGames id={id  ?? '' } />
        </>
    )
}