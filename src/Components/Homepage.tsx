
import hero from '../../public/hero.jpg' 





export default function Homepage() {
   

    return (
        <>
        <div className=" m-auto bg-[#1c2b2d]  min-sm:w-full min-sm:m-0">
            <img src={`${hero}`} className="size-150 w-full opacity-35 min-sm:"/>
                <div className="opacity-90 mt-5 text-white text-center font-extrabold bg-bg-[#1c2b2d]   bg-[#1c2b2d]  w-full p-3  absolute top-1/3 ">
                    <p>From Action-packed to Visual Novel. RPG, Adventure, Strategy and more. Explore a variety of games from all the ages.</p> 
                    <label className="hidden">Search</label><input type="text"  placeholder='search' className="w-1/3 mt-5 p-5 text-black bg-fuchsia-50 rounded-2xl"></input>
                </div>
       </div>
         </>
            )
}