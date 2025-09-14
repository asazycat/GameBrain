
import hero from '../../public/hero.jpg' 





export default function Homepage() {
   

    return (
        <>
        <div className=" m-auto -bg-[#1c2b2d]   bg-[#1c2b2d] border-2 solid border-bg-[#1c2b2d]  w-9/10 mt-15 min-sm:flex min-sm:flex-row-reverse min-sm:rounded-2xl">
            <img src={`${hero}`} className="m-auto size-150 rounded-2xl w-full"/>
          
                <div className="m-2 mt-10 min-sm:mt-50">
            <p className="mt-5 text-white text-center font-extrabold bg-bg-[#1c2b2d]   bg-[#1c2b2d]  m-auto w-auto p-3 border-[#62afb9] border-5 rounded-2xl  ">From Action-packed to Visual Novel. RPG, Adventure, Strategy and more. Explore a variety of games from all the ages.</p>
            
                   
        </div>
        
            </div>
         
        </>
            )
}