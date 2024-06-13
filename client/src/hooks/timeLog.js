import { useCallback } from "react"



export const useTime = () => {

    const getTime = useCallback(() => {

        const date = new Date();

        const hours = date.getHours();
        const minute = date.getMinutes();
        const seconds = date.getSeconds();
        const miliseconds = date.getMilliseconds();

        return `${hours}:${minute}:${seconds}:${miliseconds}`;
    }, []);

    return { getTime }
}