import { Link } from "react-router-dom";
import type { IGame } from "../interface";


export default function EachSearchResult({ game }: {game: IGame}) {
    const { id, name, genre, rating, image } = game
    return (
        <Link to={`${id}`}>
            <li key={id} className=" m-auto rounded-4xl p-5 max-sm:flex max-sm:flex-col max-sm:max-w-fit bg-[#284246] ">
                <div className="m-auto p-3 min-w-fit "> 
                    <h1 className=" text-[#FFFF] font-mono max-sm:text-2xl ">{name}</h1>   
                    <p className=" max-sm:text-sm  text-center w-auto max-sm:max-w-fit border-2 bg-[#77858f] text-[#d2eb47] border-[#77858f] rounded-3xl">{genre }</p>
                    <p>{rating.mean ?? 'yet to be added'}</p>
                 </div>
                    <img src={image} alt={name} className="max-sm:rounded-2xl max-sm:border-2 max-sm:border-solid max-sm:border-amber-400 min-sm:h-[20em] min-sm:w-[20em] max-sm:h-[7em] max-sm:w-[7em] m-auto"/>
                  
            </li>
        </Link>
    )
}