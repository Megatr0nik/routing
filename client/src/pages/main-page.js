import { useContext, useState } from 'react';


import { useTime } from '../hooks/timeLog';

import { useHttp } from '../hooks/httpHook';

import User from '../components/user/user';

import Gallery from '../components/gallery/gallery';
import EmptyGallery from '../components/gallery/empty-gallery';

import { Modal } from '../components/modal/modal';
import { ModalImage } from '../components/modal/modal-image';

import './main-page.css';

import { LoginContext } from '../context/LoginContext';
import { useGallery } from '../hooks/galleryHook';



const Main = () => {

    const { logout, userId, data } = useContext(LoginContext);

    const { loading } = useHttp();

    const { getTime } = useTime();

    // const { getGallery } = useGallery();

    const [gallery, setGalleryOn] = useState(false);
    const [activeModal, setModalActive] = useState({ active: false, image: null, arr: [], src: '' });

    console.log("Main page ==>", getTime(), gallery)


    const onGallery = (id) => {
        return <Gallery
            userId={id}
            setModalActive={setModalActive}
            setGalleryOn={setGalleryOn}
            gallery={gallery}
        />
    }

    return (
        <div className="main-container">
            <section className="main-content">
                {gallery && onGallery(userId)}
            </section>
            <aside className='content-right'>
                <User setGalleryOn={setGalleryOn} gallery={gallery} />

                <div className='friends-container'>
                    <h4>Друзі</h4>
                    {/* <Friends friends={props.friends} url={_BASE_URL} /> */}
                </div>
                <button
                    onClick={logout}
                >
                    Logout
                </button>

                <div style={{ margin: 50 }}>
                    {userId}
                </div>

            </aside>

            {activeModal.active &&
                <Modal
                    active={activeModal.active}
                    close={setModalActive}
                    content={<ModalImage props={activeModal} />}
                />}
        </div>
    );
}


export default Main;