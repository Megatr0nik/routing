

export const ModalImage = ({ image, setModalActive }) => {

    const onClose = () => {
        setModalActive({ active: false })
    }

    return (
        <div>
            <img
                src={image}
                alt="img"
                width='600'
                height='800'
                onClick={onClose}
            />
        </div>
    );
}