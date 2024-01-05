import { useCallback, useEffect, useState } from "react"


export const useLogin = () => {

    const [token, setToken] = useState(null);
    const [userId, setId] = useState(null);
    const [data, setOther] = useState(null);


    const login = useCallback((tok, id, other) => {
        setToken(tok);
        setId(id);
        setOther(other)

        // console.log(other)

        localStorage.setItem('userData', JSON.stringify({
            token: tok,
            userId: id,
            data: other
        }));
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setId(null);
        setOther(null)
        localStorage.removeItem('userData');
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));
        // console.log(data);

        if (data && data.token) {
            // console.log(data.token, data.userId);
            login(data.token, data.userId, data.data);
        }
        // setAuth(true);

    }, [login]);


    return { token, userId, data, login, logout }
}



