import { createContext } from "react";

const empty = () => { }

export const LoginContext = createContext({
    token: null,
    userId: null,
    login: empty,
    logout: empty,
    loading: null,
    data: null
})