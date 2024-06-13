import { useContext, useState } from "react"
import { LoginContext } from "../context/LoginContext";


import { useHttp } from "../hooks/httpHook";

import config from "../config/config.json";
import './auth-page.css';
import { Loader } from "../components/loader/loader";


const AuthPage = () => {

    const logindata = useContext(LoginContext)
    const { request, loading } = useHttp();

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const [info, setInfo] = useState({ set: false, data: '' });

    const handlerData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const message = (mess) => {
        setInfo({ set: true, data: mess });
        setTimeout(() => setInfo({ set: false, data: '' }), 5000);
    }

    const onRegistration = async () => {

        const incoming = await request(config.register, 'POST', data);

        if (incoming.hasOwnProperty('message')) {
            message(incoming.hasOwnProperty('errors') ? incoming.errors[0].msg : incoming.message);
        }

    }

    const onLogin = async () => {

        const incoming = await request(config.login, 'POST', data);

        console.log(incoming);

        if (incoming.hasOwnProperty('message')) {
            message(incoming.hasOwnProperty('errors') ? incoming.errors[0].msg : incoming.message);
        } else {
            const { token, userId, name, avatar, date, friends, posts } = incoming;
            logindata.login(token, userId, {
                name,
                avatar,
                date,
                friends,
                posts
            });
        }
    }

    if (!loading) {
        return (
            <>
                <h1>Сторінка авторизації</h1>

                <div className="auth-form-container">
                    {/* <form
                    encType="multipart/form-data"
                    name="auth-form"
                    onSubmit={onSubmit}
                > */}
                    <input
                        type="email"
                        name="email"
                        autoComplete="on"
                        onChange={handlerData}
                    />
                    <input
                        type="password"
                        name="password"
                        autoComplete="off"
                        onChange={handlerData}
                    />

                    <button
                        name="auth"
                        value="login"
                        onClick={onLogin}
                        disabled={loading}

                    >Login</button>

                    <button
                        name="auth"
                        value="register"
                        onClick={onRegistration}
                        disabled={loading}

                    >Register</button>
                    {/* </form> */}
                </div>
                <h2
                    className='warning-info'
                    style={info.set ? { display: 'flex' } : { display: 'none' }}
                >
                    {info.data}
                </h2>

            </>

        )
    }
    return (
        <Loader />
    )

}



export default AuthPage;