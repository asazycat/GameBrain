
import { useContext } from "react"
import { UserContextProvider } from "../Contexts/UserContextProvider"

export default function Profile() {

    const user = useContext(UserContextProvider)
    console.log(user)
    return (
        <h1>Profile is </h1>
    )
}