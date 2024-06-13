
import { useContext, useState } from 'react';

import { useGallery } from '../../hooks/galleryHook';

import './user.css';
import { LoginContext } from '../../context/LoginContext';
import config from '../../config/config.json';

const User = ({ setGalleryOn, gallery }) => {

    const { userId, data, } = useContext(LoginContext);
    const { name, avatar, friends, posts, date } = data;

    const { getGallery } = useGallery();

    // const [buttonOn, setButtonOn] = useState(false);

    const onGallery = () => {
        setGalleryOn(!gallery);
    }

    return (
        <div className='user' onMouseEnter={e => e.preventDefault()}>
            <img
                className='avatar'
                // src={`${url}/api/person/${id}/avatar/${avatar}`}
                src={`${config._BASE_URL}/img/${avatar}`}
                alt="img"
                width='96'
                height='96'
                title={`${name.first} ${name.last}`}
                onError={e => console.log(e)}
                onClick={() => console.log("Click")}
            />

            <div className='info-container'>
                <div>Друзів: {friends.length}</div>
                <div>{`${name.first} ${name.last}`}</div>
            </div>

            <div className='control-container'>
                <button
                    style={gallery ? { backgroundColor: 'yellow' } : null}
                    className='add-post-button'
                    title='gallery'
                    onClick={onGallery}
                >
                    Галерея
                </button>
                <button
                    className='add-post-button'
                    title='friends'
                >
                    Друзі
                </button>
                <button
                    className='add-post-button'
                    title='add post'
                >
                    +
                </button>
            </div>

        </div>
    )
}


export default User;