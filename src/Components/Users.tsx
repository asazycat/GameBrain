import { useContext, useState, useEffect } from "react"
import localSiteDemo from "../../public/localSiteDemo"
import { LoginContextProvider } from "../Contexts/LoginContextProvider"
import { Link } from "react-router-dom"
import type { IUser } from "../interface"

export default function Users() {
   const login = useContext(LoginContextProvider)
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
          (async function () {
      return await fetch(`${localSiteDemo}/wp/v2/users?context=edit `, { headers: { Authorization: `Bearer ${login.token}` } })
          })().then((res) => res.json()).then((res) => { console.log(res);setUsers(res); })
    },[login.token])

    return (
        <ul>{users.map((eachUser: IUser) => <Link to={`${`${eachUser.id}`}`} key={eachUser.id}><li key={eachUser.id}>{eachUser.name}</li></Link>) }</ul>
    )
}