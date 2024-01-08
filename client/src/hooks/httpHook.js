
// import axios from 'axios';

import { _BASE_URL } from '../constant/variable';
import { useCallback } from 'react';
// import { LoginContext } from '../context/LoginContext';




export const useHttp = () => {

    // const [response, setResponse] = useState({});

    // const { token, data } = useContext(LoginContext);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {

        // setResponse(await axios.post(url, data, { baseURL: _BASE_URL })
        //     .then(response => response.data)
        //     .catch(err => console.error(err))
        // );
        try {
            if (body) {
                body = JSON.stringify(body);
                headers['Content-Type'] = 'application/json';
            }

            const response = await fetch(_BASE_URL + url, { method, body, headers });
            const data = await response.json();

            console.log(data)


            if (!response.ok) {
                throw new Error(data.message || 'Error...')
            }

            return data;
        } catch (e) {
            console.error(e);
            throw e;
        }


    }, []);



    // const postRequest = async (data, uri) => {
    //     return await axios.post(uri, data, { baseURL: _BASE_URL })
    //         .then(response => response.data)
    //         .catch(err => console.error(err))
    // }


    // const getRequest = async (uri) => {
    //     return await axios.get(uri, { baseURL: _BASE_URL })
    //         .then(respond => respond.data)
    //         .catch(err => console.log(err));
    // }


    return { request }
}



