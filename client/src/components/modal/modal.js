
import './modal.css';

export const Modal = ({ active, content, close }) => {

    // const closeModal = (e) => {
    //     // e.preventDefault();
    //     console.log(e)
    //     close({ active: false });
    // }

    return (
        <div
            className={active ? "modal active" : "modal"}
            bubbles={false}
            onClick={(e) => {
                e.stopPropagation();
                close({ active: false })
            }}

        >
            <div className='content'>
                {content}
            </div>
        </div>
    )
}