import { createBrowserRouter } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import { SearchGames } from "./Components/Games/SearchGames";
import EachGame from "./Components/Game/EachGame";
import LayoutComponent from "./Components/LayoutComponent";

import PostArticle from "./Components/Articles/PostArticle";
import EachArticle from "./Components/Article/EachArticle";
import Articles from "./Components/Articles/Articles";
import User from "./Components/Users/User";
import Users from "./Components/Users/Users";



export const router = createBrowserRouter([{
    path: '/',
    element: <LayoutComponent/>,
    children: [
        {
            index: true,
            element: <Homepage />
        },
        {
            path: '/games',
            element: <SearchGames />,
      
        },
        {
            path: '/games/:id',
            element: <EachGame />
            
        },

        {
            path: '/articles',
            element: <Articles/>,
        },
        {
            path: '/articles/:id',
            element: <EachArticle/>,
        },
        {
            path: '/postArticle',
            element: <PostArticle/>,
        },
        {
            path: '*',
            element: <h1>PAGE NOT FOUND</h1>,
        },
        {
            path: '/users',
            element: <Users/>
        },
        {
            path: '/users/:id',
            element: <User/>
        }
    ]
}])

