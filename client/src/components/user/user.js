

import './user.css';

// import default_ava from '../../img/default_ava.jpg';



const User = ({ id, props, url, setGallery, gallery }) => {

    // const user = useContext(UserContext);
    console.log('user', props)
    const { name, avatar, friends, posts, date } = props;
    // const { userId, avatar } = props;

    const onGallery = () => {
        setGallery(!gallery);
    }

    return (
        <div className='user' onMouseEnter={e => e.preventDefault()}>
            <img
                // src={`${url}/api/person/${id}/avatar/${avatar}`}
                src={`${url}/api/static/img/${avatar}`}
                alt="img"
                width='100'
                height='100'
                title={`${name.first} ${name.last}`}
                onError={e => console.log(e)}
            />

            <div className='info-container'>
                <div>Друзів: {friends.length}</div>
                <div>{`${name.first} ${name.last}`}</div>
            </div>

            <div className='control-container'>
                <button
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