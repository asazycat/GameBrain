import { createBrowserRouter } from "react-router-dom"
import Homepage from "./Components/Homepage"
import { SearchGames } from "./Components/SearchGames"
import EachGame from "./Components/EachGame"

import LayoutComponent from "./Components/LayoutComponent"
import Articles from "./Components/Articles"
import User from "./Components/User"
import Users  from "./Components/Users"
import SignUp from "./Components/SignUp"
import EachArticle from "./Components/EachArticle"
export const router = createBrowserRouter([{
    path: '/',
    element: <LayoutComponent/>,
    children: [
        {
            index: true,
            element: <Homepage />
        },
        {
            path: '/signup',
            element: <SignUp/>
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

