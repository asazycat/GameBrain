import type { IGame } from "../interface";

export default function EachPlatformGame({ game }: { game: IGame }) {
    const { id, image } = game
    return (
        <>
              <li key={id} className=" ">
                
                <div className=" p-3 ">   
                       <img src={`${image}`} className="size-50 max-w-none m-2"/>
                 </div>
                  
                  
            </li>
        </>
    )
}