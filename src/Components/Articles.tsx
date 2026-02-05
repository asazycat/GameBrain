import { useContext, useEffect, useState } from "react"
import { LoginContextProvider } from "../Contexts/LoginContextProvider"
import localSiteDemo from "../../public/localSiteDemo"
import type { IPost } from "../interface"
import placeholder from '../../public/placeholder.jpg'
import { Link } from "react-router-dom"

export default function Articles() {

    const login = useContext(LoginContextProvider)
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
          (async function () {
      return await fetch(`${localSiteDemo}/wp/v2/posts`, { headers: { Authorization: `Bearer ${login.token}` } })
          })().then((res) => res.json()).then((res) => setPosts(res))
    },[login.token])

    return (
        <ul className="flex flex-col">{posts.map((eachPost: IPost) =>
            <Link to={`${eachPost.id}`}>
            <li className="m-2" key={eachPost.id}>
                {eachPost.title.rendered}
                <img src={eachPost._embedded?.["wp:featuredmedia"]?.[0]!.source_url ?? placeholder} />
            </li>
            </Link>
            )}
        </ul>
    )
}