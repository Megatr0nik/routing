import { useEffect, useState } from "react";
import { postRequest } from "../../services/request";


import './friends.css';


export const Friends = ({ friends, url }) => {

    const [elements, setElements] = useState([]);

    useEffect(() => {
        const formData = new FormData();
        formData.set('friends', friends);
        postRequest(formData, 'person/friends')
            .then(d => {
                setElements(d);
            }).catch(err => console.log(err));
    }, [friends]);

    return elements.map((user, index) => {
        return (
            <div className='friend' key={`u${index}`}>
                <img
                    className="user-img"
                    src={`${url}person/${user._id}/avatar/${user.avatar}`}
                    alt="img"
                    width='50'
                    height='50'
                    title={`${user.firstName} ${user.lastName}`}
                />

                <div
                    className="post-info"
                >
                    {user.post[0] ? user.post[0].title : 'Поки нема нічого'}
                </div>
            </div >
        );
    });

} 