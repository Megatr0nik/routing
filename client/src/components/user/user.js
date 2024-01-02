import './user.css';
// import default_ava from '../../img/default_ava.jpg';



const User = ({ props, url, setGallery, gallery }) => {

    // console.log('user', props)

    const { avatar, friends, firstName, lastName, _id } = props;

    const onGallery = () => {
        setGallery(!gallery);
    }

    return (
        <div className='user' onMouseEnter={e => e.preventDefault()}>
            <img
                src={`${url}person/${_id}/avatar/${avatar}`}
                alt="img"
                width='100'
                height='100'
                title={`${firstName} ${lastName}`}
                onError={e => console.log(e)}
            />

            <div className='info-container'>
                <div>Друзів: {friends.length}</div>
                <div>{`${firstName} ${lastName}`}</div>
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