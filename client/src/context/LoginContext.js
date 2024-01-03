import { createContext } from "react";

const empty = () => { }

export const LoginContext = createContext({
    token: null,
    userID: null,
    login: empty,
    auth: false
})