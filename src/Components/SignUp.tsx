import type { Dispatch, SetStateAction } from "react";


export default function SignUp({setSignUp}: {setSignUp:Dispatch<SetStateAction<boolean>>}) {

     const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
    }

    return (
        <div className="flex flex-col w-3/4 m-auto  h-[100vh] justify-center" onSubmit={handleSubmit}>
        <h1 className="">Welcome to GameBrain</h1>
            <form className="p-5 bg-[#1c2b2d]  border-2 solid flex flex-col justify-around h-[25em]">
                <label>Username:</label><input type="text" className="bg-white text-gray-400 min-2xl:h-[3em]" placeholder='Username'/>
                <label>Password:</label><input type="password" className="bg-white text-gray-400 min-2xl:h-[3em]" placeholder='Password'/>
                <label>Confirm Password:</label><input type="password" className="bg-white text-gray-400 min-2xl:h-[3em]" placeholder='Password'/>
                <button type="submit" className="bg-[#77858f] text-[#d2eb47] border-[#77858f]  border-2 border-solid p-2 rounded-2xl">Sign Up</button>
            </form>
            <button onClick={() => {console.log('inside');setSignUp(true)}} className="text-left text-[#d2eb47]">Back to Login Page</button>
            
        </div>
    )
} 
