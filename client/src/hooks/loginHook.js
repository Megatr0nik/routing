import { useCallback, useEffect, useState } from "react"


export const useLogin = () => {

    const [token, setToken] = useState(null);
    const [userId, setId] = useState(null);
    const [auth, setAuth] = useState(false);


    const login = useCallback((tok, id) => {
        setToken(tok);
        setId(id);

        localStorage.setItem('userData', JSON.stringify({
            token: tok,
            userId: id
        }));
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setId(null);
        localStorage.removeItem('userData');
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));
        console.log(data);

        if (data && data.token) {
            login(data.token, data.userId);
        }
        setAuth(true);

    }, [login]);


    return { token, userId, auth, login, logout }
}



