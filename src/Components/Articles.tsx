import { useContext, useEffect, useState } from "react"
import { LoginContextProvider } from "../Contexts/LoginContextProvider"
import localSiteDemo from "../../public/localSiteDemo"
import type { IPost } from "../interface"


export default function Articles() {

    const tokenObj = useContext(LoginContextProvider)
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
          (async function () {
      return await fetch(`${localSiteDemo}/wp/v2/posts?_embed`, { headers: { Authorization: `Bearer ${tokenObj.token}` } })
          })().then((res) => res.json()).then((res) => setPosts(res))
    },[tokenObj.token])

    return (
        <ul className="flex flex-col">{posts.map((eachPost: IPost) =>
            <li className="m-2">
                {eachPost.title.rendered}
                <img src={eachPost._embedded?.["wp:featuredmedia"]?.[0]!.source_url } />
            </li>)}
        </ul>
    )
}