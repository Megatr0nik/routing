import { useContext, useState } from 'react';


import User from '../components/user/user';
import Gallery from '../components/gallery/gallery';
import { Friends } from '../components/widget/friends';
import { Modal } from '../components/modal/modal';
import { ModalImage } from '../components/modal/modal-image';

import { _BASE_URL } from '../constant/variable';

import './main-page.css';
import ModalPost from '../components/modal/modal-post';
import { LoginContext } from '../context/LoginContext';
import { useAuth } from '../hooks/authHook';


const Main = () => {

    const { token, userId, data, isUser, logout } = useContext(LoginContext);

    const { checkUser } = useAuth();

    console.log(data)

    const isTrue = checkUser(token);
    console.log(isTrue);

    const [gallery, setGallery] = useState(false);
    const [active, setModalActive] = useState({ active: false, image: null });

    // console.log('Main', gallery)

    return (
        <div className="main-container">
            <Modal
                active={active.active}
                content={<ModalPost />}
            />

            <section className="main-content">
                {gallery ? <Gallery
                    gallery={gallery}
                    // id={props._id}
                    setGallery={setGallery}
                    setModalActive={setModalActive}
                /> : null}
            </section>
            <aside className='content-right'>

                <User
                    id={userId}
                    props={data}
                    url={_BASE_URL}
                    setGallery={setGallery}
                    gallery={gallery}
                />

                <div className='friends-container'>
                    <h4>Друзі</h4>
                    {/* <Friends friends={props.friends} url={_BASE_URL} /> */}
                </div>
            </aside>

            {active.active ?
                <Modal
                    active={active.active}
                    content={<ModalImage image={active.image} setModalActive={setModalActive} />}
                /> : null}
        </div>
    );
}


export default Main;