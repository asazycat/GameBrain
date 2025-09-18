import { useContext, useState, useEffect } from "react"
import localSiteDemo from "../../public/localSiteDemo"
import { LoginContextProvider } from "../Contexts/LoginContextProvider"
import type { IUser } from "../interface"

export default function Users() {
   const tokenObj = useContext(LoginContextProvider)
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
          (async function () {
      return await fetch(`${localSiteDemo}/wp/v2/users`, { headers: { Authorization: `Bearer ${tokenObj.token}` } })
          })().then((res) => res.json()).then((res) => { setUsers(res); })
    },[tokenObj.token])

    return (
        <ul>{users.map((eachUser: IUser) => <li>{eachUser.name}</li>) }</ul>
    )
}