import { useContext, useEffect, useState } from "react";
import localSiteDemo from "../../../public/localSiteDemo";
import { LoginContextProvider } from "../../Contexts/LoginContextProvider";
import type { IUser } from "../../interface";
import { useParams } from "react-router-dom";



export default function User() {
    const login = useContext(LoginContextProvider);
    const { id } = useParams();
    const [user, setUser] = useState<IUser>({
        id:'',        
        name: "",
        description: '',
        slug: '',
        avatar_urls: {
                24: '',
                48: '',
                96: ''
        },
        favourite_games: []
    });
    useEffect(() => {
          (async function () {
      return await fetch(`${localSiteDemo}/wp/v2/users/${id}`, { headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZ2FtZWJyYWluLmxvY2FsIiwiaWF0IjoxNzcwMDIyNzc4LCJuYmYiOjE3NzAwMjI3NzgsImV4cCI6MTc3MDYyNzU3OCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.ULlVWH3fBYh9hW4UCArjF1XItx6Q-7AHvr4lMLc76PY` } })
          })().then((res) => res.json()).then((res) => { console.log(res);setUser(res); })
    },[login.token])
    console.log(user)
    return (
        <div>
        <h1>{user.name}</h1>
        </div>
    )
}