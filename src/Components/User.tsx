import { useContext, useEffect, useState } from "react";
import localSiteDemo from "../../public/localSiteDemo";
import { LoginContextProvider } from "../Contexts/LoginContextProvider";
import type { IUser } from "../interface";
import { useParams } from "react-router-dom";



export default function User() {
    const login = useContext(LoginContextProvider);
    const { id } = useParams();
    const [user, setUser] = useState<IUser[]>([])
    useEffect(() => {
          (async function () {
      return await fetch(`${localSiteDemo}/wp/v2/users/${id}`, { headers: { Authorization: `Bearer ${login.token}` } })
          })().then((res) => res.json()).then((res) => { console.log(res);setUser(res); })
    },[login.token])
    console.log(user)
    return (
        <div>
        
        </div>
    )
}