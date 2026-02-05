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
      return await fetch(`${localSiteDemo}/wp/v2/users?context=edit `, { headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZ2FtZWJyYWluLmxvY2FsIiwiaWF0IjoxNzcwMDIyNzc4LCJuYmYiOjE3NzAwMjI3NzgsImV4cCI6MTc3MDYyNzU3OCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.ULlVWH3fBYh9hW4UCArjF1XItx6Q-7AHvr4lMLc76PY` } })
          })().then((res) => res.json()).then((res) => { console.log(res);setUsers(res); })
    },[login.token])

    return (
        <ul>{users.map((eachUser: IUser) => <Link to={`${`${eachUser.id}`}`} key={eachUser.id}><li key={eachUser.id}>{eachUser.name}</li></Link>) }</ul>
    )
}