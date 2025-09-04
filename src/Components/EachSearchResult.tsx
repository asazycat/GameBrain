import { Link } from "react-router-dom";
import type { IGame } from "../interface";
import Rating from "./Rating";


export default function EachSearchResult({ game }: {game: IGame}) {
    const { id, name, genre, rating, image } = game

    return (
        <>
        <Link to={`${id}`}>
            <li key={id} className=" flex flex-col-reverse max-w-full bg-[#284246] ">
                
                <div className=" p-3 "> 
                     <p className=" p-2 text-sm  text-center w-auto max-w-fit border-2 bg-[#77858f] text-[#d2eb47] border-[#77858f] rounded-3xl m-0">{genre}</p>
                    <h1 className=" text-white font-mono text-2xl p-5 text-center">{name}</h1>   
                        <div className="p-2 flex  font-mono text-white w-full justify-around"> <Rating rating={rating} /> </div>
                 </div>
                    <img src={image ?? '../../public/image-not-available.jpg'} alt={name} className=" h-[15em] w-full "/>
                  
            </li>
            </Link>
          
            </>
    )
}