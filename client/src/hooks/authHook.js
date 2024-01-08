import { useHttp } from "./httpHook"



export const useAuth = () => {

    const { request } = useHttp();

    const checkUser = (token, id) => {

        const data = request('/api', 'GET', null, {
            Authorization: `${token}`
        });

        return data;
    }


    return { checkUser };
}