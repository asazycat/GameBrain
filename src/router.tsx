import { createBrowserRouter } from "react-router-dom"
import Homepage from "./Components/Homepage"
import { SearchGames } from "./Components/SearchGames"
import EachGame from "./Components/EachGame"
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage/>
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
    path: '*',
    element: <h1>PAGE NOT FOUND</h1>,
  }
])

