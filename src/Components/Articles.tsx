import { useContext, useEffect, useState } from "react"
import { LoginContextProvider } from "../Contexts/LoginContextProvider"
import localSiteDemo from "../../public/localSiteDemo"
import type { IPost } from "../interface"
import EachArticleResult from "./EachArticleResult"
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
        <>
        <div className="w-8/10 ml-auto mr-auto  border-2 bg-[#1c2b2d] text-white border-[#1c2b2d] mt-1 p-3 min-sm:w-9/10 min-sm:m-auto min-sm:mt-5 min-sm:rounded-2xl ">
            <Link to="/postArticle"><div className=""><button  className="bg-[#77858f] text-[#d2eb47] border-[#77858f]  p-2 rounded min-w-30">Post</button></div></Link>
        </div>
        <div className="w-8/10 ml-auto mr-auto h-screen flex flex-col mt-2 max-sm:bg-[#1c2b2d] max-sm:border-[#1c2b2d] rounded overflow-scroll overflow-x-hidden">
            <ul className="flex flex-col min-sm:grid min-sm:grid-cols-3">{posts.map((eachPost: IPost) => <EachArticleResult eachPost={eachPost}/>
                )}
            </ul>
        </div>

        </>
    )
}


