import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import localSiteDemo from "../../public/localSiteDemo";
import { LoginContextProvider } from "../Contexts/LoginContextProvider";
import type { IPost } from "../interface";
import placeholder from '../../public/placeholder.jpg'
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

    console.log(eachArticle)
    return (
        <>
            <h1>{eachArticle.title.rendered}</h1>
            <img src={eachArticle._embedded?.["wp:featuredmedia"]?.[0]!.source_url ?? placeholder} />
            <p>{eachArticle.content.rendered}</p>
        </>

    ) 
}