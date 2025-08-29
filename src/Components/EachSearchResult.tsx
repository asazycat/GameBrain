import { Link } from "react-router-dom";
import type { IGame } from "../interface";


export default function EachSearchResult({ game }: {game: IGame}) {
    const { id, name, genre, rating, image } = game
    return (
        <Link to={`${id}`}>
            <li key={id} className="border-2 border-solid  m-auto rounded-sm">
                        <h1>{name}</h1>   
                        <p>{genre }</p>
                        <p>{ rating.mean ?? 'yet to be added'}</p>
                        <img src={image} alt={name} className="min-sm:h-[20em] min-sm:w-[20em]"/>
            </li>
        </Link>
    )
}