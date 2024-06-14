
import './modal.css';

export const Modal = ({ active, content, close }) => {

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