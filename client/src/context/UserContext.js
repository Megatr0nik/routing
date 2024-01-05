import { createContext } from "react";


export const UserContext = createContext({
    avatar: 'default_ava.jpg',
    id: null,
    name: {
        first: '',
        last: ''
    },
    friends: null,
    post: null
})