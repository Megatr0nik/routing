import config from "../../config/config.json";
import './gallery.css';

import { useEffect, useRef, useState } from "react";

import { useHttp } from "../../hooks/httpHook.js";
import EmptyGallery from "./empty-gallery.js";


const Gallery = ({ userId, setModalActive, setGalleryOn }) => {

    const { request } = useHttp();
    const [arrImage, setArrGallery] = useState([]);
    let arrColection = useRef([]);

    const onModal = (e) => {
        setModalActive({
            active: true,
            image: e.target,
            arr: arrColection.current,
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
                    arrColection.current = d.data;
                    return arrColection.current;
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