import { useHttp } from "./httpHook"



export const useAuth = () => {

    const { request } = useHttp();

    const checkUser = async (token) => {

        const data = await request('/api/auth', 'GET', null, {
            authorization: `Bearer ${token}`
        });


        console.log('Auth: ', data);
        return data;
    }


    return { checkUser };
}