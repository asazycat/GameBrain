
import { RouterProvider } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'

import { router } from './router'

import { LoginContextProvider } from './Contexts/LoginContextProvider'
import LoginPage from './Components/LoginPage'
import type { IToken, IUser } from './interface'
import { UserContextProvider } from './Contexts/UserContextProvider'
import localSiteDemo from '../public/localSiteDemo'



function App() {

  
  const [tokenObj, setTokenObj] = useState<IToken>({ token: '', user_name: '', user_nicename: '', user_display_name: '' })
  const [user, setUser] = useState<IUser>({id: '', name: '', description: '', slug: '', avatar_urls: { 24: '', 48: '', 96: ''},favourite_games: []})
  useEffect(() => {
    (async function() {
      return await fetch(`${localSiteDemo}/wp/v2/users/me`, {headers: {Authorization: `Bearer ${tokenObj.token}`}})
    })().then((res) => res.json()).then((res) => setUser({id: res.id, name: res.name, description: res.description, slug: res.slug, avatar_urls: res.avatar_urls ,favourite_games: res.favourite_games})).catch((err) => alert(`${err.message}`))
   
}, [tokenObj])

 
  if (!tokenObj.token) {
    return <LoginPage setTokenObj={setTokenObj} />
  } else if(tokenObj.token) {
    return (<>
      
      <LoginContextProvider value={tokenObj}>
        <UserContextProvider value={user}>
          <RouterProvider router={router} />
        </UserContextProvider>
      </LoginContextProvider>
    </>
  
    )
  }
}

export default App
