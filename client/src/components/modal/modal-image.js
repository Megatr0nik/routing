import { useState } from 'react';

import arrow from '../../img/naw-arrow.png';

export const ModalImage = ({ props }) => {

    const { image, arr, src } = props;
    const [curentImage, setImage] = useState(image.src);
    const [curentId, setId] = useState(+image.id);
    const [firstLast, setPointLastFirst] = useState({ first: false, last: false })

    const nawString = () => {
        const black = <div className='naw-element black' ></div>
        const white = <div className='naw-element white' ></div>

        if (curentId === 0) { }

        return arr.map((item, i) => {

            if (i === curentId) {
                return black
            } return white

        });
    }

    const onPlus = (e) => {
        e.stopPropagation();

        const plus = curentId + 1
        if (plus < arr.length) {
            setId(plus)
            setImage(`${src}${arr[plus]}`)
        }
    }

    const onMinus = (e) => {
        e.stopPropagation();

        const minus = curentId - 1
        if (minus >= 0) {
            setId(minus)
            setImage(`${src}${arr[minus]}`)
        }
    }


    return (
        <div>
            <div className="single-image">
                <div
                    className="controll left hover"
                    style={curentId === 0 ? { filter: 'opacity(0%)' } : null}
                >
                    <img
                        src={arrow}
                        alt="left-arrow"
                        onClick={onMinus}
                    />
                </div>
                <img
                    src={curentImage}
                    alt="img"
                    width='600'
                    height='800'
                    onClick={e => e.stopPropagation()}
                />
                <div
                    className="controll right hover"
                    style={curentId === arr.length - 1 ? { filter: 'opacity(0%)' } : null}
                >

                    <img
                        src={arrow}
                        alt="right-arrow"
                        onClick={onPlus}
                    />
                </div>
            </div>

            <div className='naw-string'>
                {nawString()}
            </div>
        </div>

    );
}