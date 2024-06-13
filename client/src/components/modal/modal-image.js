import { useEffect, useState } from 'react';
// import { useGallery } from '../../hooks/galleryHook';
import arrow from '../../img/right-arrow.png';

export const ModalImage = ({ props }) => {

    // const { arrCollection } = useGallery();

    const { image, arr, src } = props;


    const [curentImage, setImage] = useState(image.src);
    const [curentId, setId] = useState(+image.id);
    // const [nawArr, setNawArr] = useState(new Array(5));

    // const nawArr = [];

    const nawString = () => {

        const black = <div className='naw-element black' ></div>
        const white = <div className='naw-element white' ></div>

        return arr.map((item, i) => {

            if (i === curentId) {
                return black
            } return white

        })

        // for (let i = 0; i < 7; i++) {
        //     if (i <= 2 || i >= 4) {
        //         nawArr.push(<div className='naw-element white' ></div>)
        //     } else nawArr.push(<div className='naw-element black' ></div>)
        // };




        // return arr.map((item, i) => {
        //     if (i === curentId) {
        //         return <div className='naw-element black'></div>
        //     }
        //     return <div className='naw-element white'></div>
        // })
    }

    const onNaw = (e) => {
        e.stopPropagation();

        const operator = e.target.id;
        if (operator === '++') {
            const plus = curentId + 1
            if (plus < arr.length) {
                setId(plus)
                setImage(`${src}${arr[plus]}`)
                console.log(curentImage)
            }
        }

        if (operator === '--') {
            const minus = curentId - 1
            if (minus >= 0) {
                setId(minus)
                setImage(`${src}${arr[minus]}`)
                console.log(curentImage)
            }
        }
    }


    return (
        <div>
            <div className="single-image">
                <div className="controll left hover">
                    <img
                        src={arrow}
                        id='--'
                        alt="left-arrow"
                        onClick={onNaw}
                    />
                </div>
                <img
                    src={curentImage}
                    alt="img"
                    width='600'
                    height='800'
                    onClick={e => e.stopPropagation()}
                />
                <div className="controll right hover">
                    <img
                        src={arrow}
                        id='++'
                        alt="right-arrow"
                        onClick={onNaw}
                    />
                </div>
            </div>

            <div className='naw-string'>
                {nawString()}
            </div>
        </div>

    );
}