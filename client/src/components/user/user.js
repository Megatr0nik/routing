
import { useContext } from 'react';

import './user.css';
import { LoginContext } from '../../context/LoginContext';
import config from '../../config/config.json';

const User = ({ setGalleryOn, gallery }) => {

    const { userId, data, } = useContext(LoginContext);
    const { name, avatar, friends, posts, date } = data;

    // const { getGallery } = useGallery();

    const onGallery = () => {
        setGalleryOn(!gallery);
    }

    return (
        <div className='user' onMouseEnter={e => e.preventDefault()}>
            <img
                className='avatar'
                src={`${config._BASE_URL}/api/person/${userId}/avatar/${avatar}`}
                alt="img-avatar"
                width='96'
                height='96'
                title={`${name.first} ${name.last}`}
                onError={e => e.target.src = `${config._BASE_URL}/img/${avatar}`}
            // onClick={() => console.log("Click")}
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