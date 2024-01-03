import img from '../img/bird.png';

export const Header = () => {
    return (
        <header className="title">
            <span>BiRdie </span>
            <img src={img} alt="logo" width="32" height="32" />
        </header>
    )
}

