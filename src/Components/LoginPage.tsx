import {useState, type Dispatch,  type SetStateAction } from "react"
import type {IToken } from "../interface"
import localSiteDemo from '../../public/localSiteDemo'

export default function LoginPage({ setTokenObj }: {  setTokenObj: Dispatch<SetStateAction<IToken>> }) {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

//     localStorage.removeItem('user')
//   localStorage.removeItem('tokenObject')
    
     
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault() 
        await fetchTokenWpJWT().then((res) => res.json())
            .then((res) => { localStorage.setItem('tokenObj',JSON.stringify(res)); setTokenObj(res) })
            .catch((err) => console.log(err.message))

        
    }
    
    const fetchTokenWpJWT =  () => {
          return fetch(`${localSiteDemo}/jwt-auth/v1/token`, { method: 'POST',  headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({username: username, password: password}) })
           
        }
    
    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-3/4 m-auto p-5 bg-[#284246]  border-2 solid rounded-2xl h-[10em] justify-between mt-50 min-sm:w-1/2 min-md:w-1/3 min-lg:w-1/4 min-2xl:w-1/3 min-2xl:h-[15em]">
            <input className='bg-white text-gray-400 min-2xl:h-[3em]' type="text" onChange={e => setUsername(e.target.value)} placeholder='Username' />
            <input className='bg-white text-gray-400 min-2xl:h-[3em]' type="password" onChange={e => setPassword(e.target.value)} placeholder='Password'/>
            <div className="flex flex-row justify-around">
                <button type='submit' className="bg-[#77858f] text-[#d2eb47] border-[#77858f]  border-2 border-solid p-2 rounded-2xl " >Login</button>
                <button onClick={ () => alert('This has not been implemented') } className="bg-[#77858f] text-[#d2eb47] border-[#77858f]  border-2 border-solid p-2 rounded-2xl">Sign Up</button>
            </div>
        </form>
    )
}