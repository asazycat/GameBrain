import { createContext } from "react";
import type { IToken } from "../interface";

export const LoginContextProvider = createContext<IToken>({
    token: '',
    user_name: '',
    user_nicename: '',
    user_display_name: ''
})