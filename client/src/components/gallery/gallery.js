
import { useCallback, useEffect, useState } from "react";
import config from "../../config/config.json";


import './gallery.css';
import EmptyGallery from "./empty-gallery.js";
// import { useGallery } from "../../hooks/galleryHook.js";

import { useTime } from "../../hooks/timeLog.js";
import { useHttp } from "../../hooks/httpHook.js";


const Gallery = ({ userId, gallery, setModalActive, setGalleryOn }) => {

    // const { getTime } = useTime();

    const { request } = useHttp();

    const [arrImage, setArrGallery] = useState([]);
    // const [arrColection, setArrCollection] = useState([]);

    let arrColection = [];

    const onModal = (e) => {

        // console.log('gallery ==>', arrColection);

        setModalActive({
            active: true,
            image: e.target,
            arr: arrColection,
            src: `${config._BASE_URL}/person/${userId}/gallery/`
        });
    };


    const addFoto = (e) => {
        const formData = new FormData();

        formData.set('image', e.target.files['0']);
        formData.set('id', userId);

        request(`/api/person/${userId}/gallery/`, 'POST', formData, {}, true)
            .then(() => setGalleryOn(false))
            .then(() => setTimeout(() => {
                setGalleryOn(true)
            }), 10);
    }

    useEffect(() => {

        const loadData = async () => {
            await request(`/api/person/${userId}/gallery/`, 'GET', null)
                .then((d) => {
                    // const data = d.data;
                    arrColection = d.data;
                    console.log('gallery ==>', arrColection);

                    return arrColection;
                })
                .then((d) => {
                    setArrGallery(d.map((item, i) => {
                        return (
                            <img
                                key={`g${i}`}
                                id={i}
                                src={`${config._BASE_URL}/person/${userId}/gallery/${item}`}
                                alt="gallery_image"
                                className="img-item hover"
                                width='100'
                                height='140'
                                onClick={onModal}
                            />
                        )
                    }));
                });
        }

        loadData();

    }, []);

    return (
        <>
            <div className="gallery-container" >
                {arrImage.length ? arrImage : <EmptyGallery />}
            </div>
            <div className="orientation">
                <label
                    htmlFor='image_uploads'
                    className='add-foto'
                >Add
                    <input
                        style={{ display: 'none' }}
                        id='image_uploads'
                        name='add-foto'
                        accept='.png, .jpg, .jpeg'
                        type='file'
                        onInput={addFoto}

                    />
                </label>

            </div>
        </>

    );
}

export default Gallery;


// const addFoto = (e) => {
//     const formData = new FormData();

//     formData.set('image', e.target.files['0']);
//     formData.set('id', id);

//     // request(`/api/person/${id}/gallery/`, 'POST', formData, {}, true)
//     //     .then(() => setGallery(false))
//     //     .then(() => setTimeout(() => {
//     //         setGallery(true)
//     //     }), 1000);
// }