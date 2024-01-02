
import { useEffect, useState } from "react";
import { _BASE_URL } from "../../constant/variable.js";
import { getRequest, postRequest } from "../../services/request.js";

import './gallery.css';
import EmptyGallery from "./empty-gallery.js";


const Gallery = ({ id, setModalActive, setGallery }) => {

    const [arrGallery, setArrGallery] = useState([]);
    // const [refresh, setRefresh] = useState('');

    const onModal = (e) => {
        console.log(e.target.src)
        setModalActive({
            active: true,
            image: e.target.src
        });
    }

    const addFoto = (e) => {
        const formData = new FormData();
        formData.set('foto', e.target.files[0]);
        postRequest(formData, `person/${id}/gallery/`)
            .then(() => setGallery(false))
            .then(() => setTimeout(() => {
                setGallery(true)
            }), 1000);
    }

    useEffect(() => {
        getRequest(`person/${id}/gallery/`, id)
            .then(data => {
                setArrGallery(data.map((item, i) => {
                    return (
                        <img
                            key={`g${i}`}
                            src={`${_BASE_URL}person/${id}/gallery/${item}`}
                            alt="gallery_image"
                            className="img-item"
                            width='100'
                            height='140'
                            onClick={onModal}
                        />
                    );
                }));
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <div className="gallery-container" >
                {arrGallery.length ? arrGallery : <EmptyGallery id={id} />}
            </div>
            <div className="orientation">
                <label
                    htmlFor='image_uploads'
                    className='add-foto'
                >Add</label>
                <input
                    style={{ display: 'none' }}
                    id='image_uploads'
                    name='add-foto'
                    accept='.png, .jpg, .jpeg'
                    type='file'
                    onInput={addFoto}

                />
            </div>
        </>

    );
}

export default Gallery;