import { Link } from "react-router-dom";
import type { IGame } from "../interface";


export default function EachSearchResult({ game }: {game: IGame}) {
    const { id, name, genre, short_description, image } = game
    return (
        <Link to={`${id}`}>
            <li key={id}>
                        <h1>{name}</h1>   
                        <p>{genre }</p>
                        <p>{ short_description ?? 'yet to be added'}</p>
                        <img src={image} alt={name} />
            </li>
        </Link>
    )
}