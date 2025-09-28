import { createContext, type Dispatch, type SetStateAction } from "react";
import type { IToken } from "../interface";



export const LoginContextProvider = createContext<{ tokenObj: IToken, setTokenObj:Dispatch<SetStateAction<IToken>> | null}>({
    tokenObj: { token: '', user_name: '', user_nicename: '', user_display_name: '' },
    setTokenObj: null
})