import { createContext } from "react";

const empty = () => { }

export const LoginContext = createContext({
    token: null,
    userID: null,
    login: empty,
    logout: empty,
    data: null
})