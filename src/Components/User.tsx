import { useContext, useEffect } from "react";
import { UserContextProvider } from "../Contexts/UserContextProvider";



export default function User() {
    useEffect(() => {

    }, [])
    
    const user = useContext(UserContextProvider)
    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.description}</p>
        </div>
    )
}