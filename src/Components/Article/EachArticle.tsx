import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import localSiteDemo from "../../../public/localSiteDemo";
import { LoginContextProvider } from "../../Contexts/LoginContextProvider";
import type { IPost } from "../../interface";
import placeholder from '../../assets/placeholder.jpg'
import ReactHtmlParser from 'html-react-parser'; 

export default function EachArticle () {
    const login = useContext(LoginContextProvider)
    const [eachArticle, setEachArticle] = useState<IPost>({    id: 0,
                                                title: {
                                                    rendered: ''
                                                },
                                                content: {
                                                    rendered: '',
                                                    protected: false
                                                },
                                                categories: [],
                                                tags: [],
                                                featured_media: 0,
                                                link: '',
                                                })
    const { id } = useParams();
    useEffect(() => {
        (async () =>  {
            return await fetch(`${localSiteDemo}/wp/v2/posts/${id}`, { headers: { Authorization: `Bearer ${login.token}` } })
        })().then((res) => res.json()).then((res) => setEachArticle(res))
        
    }, [id]);

    return (
        <div className="w-9/10 m-auto bg-[#1c2b2d] mt-2 min-sm:bg-transparent">
            <div className=" min-sm:flex min-sm:flex-row border-[#1c2b2d] min-sm:border-2 ">
                <div className="flex flex-col min-sm:bg-[#1c2b2d] min-sm:p-5 min-sm:w-1/2">
                    <h1 className="w-fit-content p-3 text-white font-mono border-[#1c2b2d] text-center min-sm:text-2xl min-sm:border-0 min-sm:text-left">{eachArticle.title.rendered}</h1>
                    <p className="text-white text-center mt-5 max-sm:hidden min-sm:text-left">{ReactHtmlParser(eachArticle.content.rendered)}</p>
                </div>
                <img src={eachArticle._embedded?.["wp:featuredmedia"]?.[0]!.source_url ?? placeholder} className="m-auto p-4 w-100 min-sm:size-150 min-sm:p-0 min-sm:w-1/2"/>
            </div>
            <p className="text-white text-center mt-5 min-sm:hidden">{ReactHtmlParser(eachArticle.content.rendered)}</p>
        </div>
)
    
}