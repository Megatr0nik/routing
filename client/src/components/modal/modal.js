
import './modal.css';

export const Modal = ({ active, content }) => {

    return (
        <div className={active ? "modal active" : "modal"}>
            <div className='content'>
                {content}
            </div>
        </div>
    )
}