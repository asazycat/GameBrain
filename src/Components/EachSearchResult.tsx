import { Link } from "react-router-dom";
import type { IGame } from "../interface";
import Rating from "./Rating";


export default function EachSearchResult({ game }: {game: IGame}) {
    const { id, name, genre, rating, image } = game

    return (
        <>
        <Link to={`${id}`}>
            <li key={id} className=" m-auto max-sm:flex max-sm:flex-col-reverse max-sm:max-w-full bg-[#284246] min-sm:border-2 min-sm:w-75 min-sm:flex min-sm:flex-col-reverse min-sm:rounded-2xl min-sm:p-2 min-sm:h-100 min-sm:mt-10 ">
                
                <div className=" p-3 min-w-fit min-sm:flex min-sm:flex-col min-sm: h-full"> 
                     <p className=" max-sm:p-2 max-sm:text-sm  text-center w-auto max-sm:max-w-fit border-2 bg-[#77858f] text-[#d2eb47] border-[#77858f] rounded-3xl max-sm:m-0">{genre}</p>
                    <h1 className=" text-white font-mono max-sm:text-2xl max-sm:p-5 max-sm:text-center">{name}</h1>   
                        <p className="max-sm:p-2 flex  font-mono text-white ">{(rating.mean * 5).toFixed(2) } <Rating rating={rating} /> </p>
                 </div>
                    <img src={image ?? '../../public/image-not-available.jpg'} alt={name} className=" min-sm:h-[15em] min-sm:w-[20em] max-sm:h-[15em] max-sm:w-full border-2 "/>
                  
            </li>
            </Link>
          
            </>
    )
}