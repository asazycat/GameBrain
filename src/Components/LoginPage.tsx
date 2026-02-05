import { useState, type Dispatch, type SetStateAction, } from "react"
import localSiteDemo from '../../public/localSiteDemo'
import type { IToken } from "../interface"
import SignUp from "./SignUp"


export default function LoginPage({setTokenObj}: {setTokenObj:Dispatch<SetStateAction<IToken>>}) {
    
    const [username, setUsername] = useState('DemoUserAuthor')
    const [password, setPassword] = useState('')
    const [signUp, setSignUp] = useState(true)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault() 
        await fetchTokenWpJWT().then((res) =>  res.json() )
            .then((res) => { localStorage.setItem('tokenObj',JSON.stringify(res)); setTokenObj!(res) })
            .catch((err) => console.log(err.message))

        
    }
    
    const fetchTokenWpJWT = () => {
        console.log(`${localSiteDemo}/jwt-auth/v1/token`, username, password)
          return fetch(`${localSiteDemo}/jwt-auth/v1/token`, { method: 'POST',  headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({username: username, password: password}) })
           
        }
    
   return( (signUp)
    ?  (
        <form onSubmit={handleSubmit} className="flex flex-col w-3/4 m-auto p-5 bg-[#1c2b2d]  border-2 solid rounded-2xl h-[10em] justify-between mt-50 min-sm:w-1/2 min-md:w-1/3 min-lg:w-1/4 min-2xl:w-1/3 min-2xl:h-[20em]">
            <input className='bg-white text-gray-400 min-2xl:h-[3em]' type="text" onChange={e => setUsername(e.target.value)} placeholder='Username' value={username}/>
            <input className='bg-white text-gray-400 min-2xl:h-[3em]' type="password" onChange={e => setPassword(e.target.value)} placeholder='Password' value={password}/>
            <p className="text-[#d2eb47]" onClick={() => { setUsername('DemoAccountUser'); setPassword('Shifu6270abc')}}>Demo Account</p>
            <div className="flex flex-row justify-around">
                <button type='submit' className="bg-[#77858f] text-[#d2eb47] border-[#77858f]  border-2 border-solid p-2 rounded-2xl " >Login</button>
               <button className="bg-[#77858f] text-[#d2eb47] border-[#77858f]  border-2 border-solid p-2 rounded-2xl" onClick={() => setSignUp(false)}>Sign Up</button>
            </div>
        </form>
    ) : (
        <SignUp setSignUp={setSignUp}/>
    ))
}