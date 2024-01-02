
import axios from 'axios';

import { _BASE_URL } from '../constant/variable';



export const postRequest = async (data, uri) => {
    return await axios.post(uri, data, { baseURL: _BASE_URL })
        .then(response => response.data)
        .catch(err => console.error(err))
}


export const getRequest = async (uri) => {
    return await axios.get(uri, { baseURL: _BASE_URL })
        .then(respond => respond.data)
        .catch(err => console.log(err));
}
