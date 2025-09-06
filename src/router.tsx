import { createBrowserRouter } from "react-router-dom"
import Homepage from "./Components/Homepage"
import { SearchGames } from "./Components/SearchGames"
import EachGame from "./Components/EachGame"
import Genres from "./Components/Genres"
import LayoutComponent from "./Components/LayoutComponent"
import Articles from "./Components/Articles"
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
            
        }
        ,
        {
            path: '/genres',
            element: <Genres />
        },
        {
            path: '/articles',
            element: <Articles/>,
        },
        {
            path: '*',
            element: <h1>PAGE NOT FOUND</h1>,
        }
    ]
}])

