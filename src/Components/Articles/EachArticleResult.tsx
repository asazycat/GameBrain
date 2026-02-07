import { Link } from "react-router-dom";
import placeholder from '../../assets/placeholder.jpg';
import type { IPost } from "../../interface";

export default function EachArticleResult({eachPost}: {eachPost: IPost}) {
    const {id, title, _embedded} = eachPost
    return (
        <Link to={`${id}`}>
            <li className="m-2 p-5 content-center flex flex-col-reverse bg-[#1c2b2d] border-[#1c2b2d] rounded min-sm:p-1" key={id} >
                <h1 className="text-white font-mono text-2xl p-5 max-sm:border-b-5 border-white border-double min-sm:h-[6em]">{title.rendered}</h1>
                <img src={_embedded?.["wp:featuredmedia"]?.[0]!.source_url ?? placeholder} className="m-auto p-5 min-sm:m-0 min-sm:p-0 min-sm:w-auto min-sm: "/>
            </li>
            </Link>
    )
}