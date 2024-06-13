
// import { _BASE_URL } from '../constant/variable';
import { useCallback, useState } from 'react';

import { useTime } from "../hooks/timeLog";

import config from '../config/config.json';
// import { LoginContext } from '../context/LoginContext';




export const useHttp = () => {

    const { getTime } = useTime();

    // const [response, setResponse] = useState({});

    // const { token, data } = useContext(LoginContext);

    const [loading, setLoading] = useState(false);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}, hasFile = false) => {

        try {

            setLoading(true);
            // console.log(body)
            if (body && !hasFile) {
                body = JSON.stringify(body);
                headers['Content-Type'] = 'application/json';
            }

            const response = await fetch(config._BASE_URL + url, { method, body, headers });
            const data = await response.json();

            console.log("Http_Hook ===> ", getTime(), data);
            // console.log("Http_Hook ===> ", response);
            if (response.ok) { //data.hasOwnProperty("message")
                setLoading(false);
                return data;
            } else if (!response.ok) {
                setLoading(false);
                throw new Error(data.message || 'Error...')
            }

            setLoading(false);

            return data;

        } catch (e) {
            console.error(e);
            throw e;
        }

    }, []);

    return { request, loading }
}



