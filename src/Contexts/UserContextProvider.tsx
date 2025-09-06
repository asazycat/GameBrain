import { createContext } from "react";
import type { IUser } from "../interface";



export const UserContextProvider = createContext<IUser>({id: '', name: '', description: '', slug: '', avatar_urls: { 24: '', 48: '', 96: ''},favourite_games: []})