import { useEffect, useState } from "react"
import type { IGame } from "../interface"
import hero from '../../public/hero.jpg' 

import apiKey from "../../public/apiKey"
import EachPlatformGame from "./EachPlatformGame"
import SuggestGames from "./SuggestGames"




export default function Homepage() {
    const [platform, setPlatform] = useState('pc')
    const [platformGames, setPlatformGames] = useState<IGame[]>([])

    useEffect(() => {
       
        const params = new URLSearchParams(
            {
                'filters': `[{"key":"platform","values":[{"value":"${platform}"}]},{"key":"release_date","values":[{"value":"last_year"}]}]`
            })


        let isReq = false;
        const gamesByPlatform = () => fetch(`https://api.gamebrain.co/v1/games?${params}&sort=computed_rating&sort-order=desc&limit=10`,{
            method: 'GET',
             headers: {
                 'x-api-key': apiKey
                     }
            }).then((res) => res.json()).then((res) => { if(!isReq) setPlatformGames(res.results) }).catch((err) => console.log(err.message))
         gamesByPlatform()
        return () => {isReq = true}
    }, [platform])



    return (
        <>
        <div className=" m-auto bg-[#284246] border-2 solid border-[#284246] w-9/10 mt-15 min-sm:flex min-sm:flex-row-reverse min-sm:rounded-2xl">
            <img src={`${hero}`} className="m-auto size-150 rounded-2xl w-full"/>
          
                <div className="m-2 mt-10 min-sm:mt-50">
            <p className="mt-5 text-white text-center font-extrabold bg-[#284246]  m-auto w-auto p-3 border-[#62afb9] border-5 rounded-2xl  ">From Action-packed to Visual Novel. RPG, Adventure, Strategy and more. Explore a variety of games from all the ages.</p>
            <div className="flex bg-[#284246] w-full justify-around text-[#d2eb47] mt-5">
                <button className="border-2 solid  m-2 rounded-2xl bg-[#77858f] text-[#d2eb47] border-[#77858f] " onClick={e => setPlatform(e.currentTarget.value)} value='playstation'>Top PlayStation Games</button>
                <button className="border-2 solid m-2 rounded-2xl bg-[#77858f] text-[#d2eb47] border-[#77858f] " onClick={e => setPlatform(e.currentTarget.value)} value='xbox'>Top Xbox Games</button>
                <button className="border-2 solid m-2 rounded-2xl bg-[#77858f] text-[#d2eb47] border-[#77858f] " onClick={e => setPlatform(e.currentTarget.value)}  value='pc'>Top PC Games</button>
                    </div>
                    <div className="w-1/2 m-auto"><SuggestGames/></div>
        </div>
        
            </div>
            <ul className="flex flex-row:w-full  overflow-scroll ">
                {platformGames.map((eachPlatformGame) => <EachPlatformGame game={eachPlatformGame} key={eachPlatformGame.id}/>)}
            </ul>
        </>
            )
}