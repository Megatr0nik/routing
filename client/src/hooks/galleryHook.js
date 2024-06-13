
import { useCallback, } from "react";

import { useHttp } from "./httpHook";

import { useTime } from "./timeLog";


export const useGallery = () => {

    // const [gallery, setGalery] = useState(false);
    // const [arrCollection, setCollection] = useState([]);

    // const [arrElements, setElements] = useState([]);
    const { request } = useHttp();

    const { getTime } = useTime();

    // const galleryOn = useCallback(() => {
    //     console.log("on ==>", gallery);
    //     setGalery(!gallery);
    //     console.log("on ==>", gallery);
    // }, [])

    const addFoto = useCallback((elem, id) => {

        const formData = new FormData();

        formData.set('image', elem.target.files['0']);
        formData.set('id', id);

        request(`/api/person/${id}/gallery/`, 'POST', formData, {}, true)

    }, [])


    const getGallery = useCallback(async (id) => {

        return await request(`/api/person/${id}/gallery/`, 'GET', null)

    }, [])

    return { getGallery, addFoto }
}